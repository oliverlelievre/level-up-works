import React, { useContext } from "react"
import './StudentProfileViewerPage.css';
// import JsonData from './StudentProfileViewerData.json';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetFetch from "../../../../hooks/useGetFetch";
import { AuthContext } from "../../../../contexts/AuthContext";

function StudentProfileViewerPage() {

    const [studentDetails, setStudentDetails] = useState([]);


    const { role } = useContext(AuthContext);

    const { student_id } = useParams();
    const navigate = useNavigate();

    const {
        data,
        error,
        isPending,
    } = useGetFetch(`http://localhost:4000/api/v1/student/${student_id}`);

    // //useState is empty = result is empty
    // useEffect(() => {
    //     //fetch from project library api
    //     fetch(`http://localhost:4000/api/v1/students/${student_id}`)
    //         .then((response) => response.json())
    //         .then((data) => setResults(data));
    // }, []);

    useEffect(() => {
        if (data && data.length >= 0) {
            setStudentDetails(data[0]);
        }
    }, [data]);

    return (
        <>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {studentDetails && (<div className="mainContainer">

                <div className="studentAvatarContainer">


                    {/* {displayProjects} */}
                    {/* {results.map(function (result) { */}
                    <div >
                        <img className="studentAvatar" src={`/${studentDetails.profile_pic}`} alt="student"></img>
                    </div>


                    {/* {DisplayProfilePicture} */}

                    <button className="studentPageButton"> EDIT PROFILE </button>
                    <button className="studentPageButton"> CHANGE PHOTO </button>
                </div>


                <div className="studentInfoContainer">
                    {/* {DisplayData} */}

                    {/* {results.map(function (result) { */}
                    {/* return */}
                    <div >
                        <table className="studentTable">

                            <caption className="studentName">{studentDetails.name}</caption>
                            <tbody>
                                <tr>
                                    <td className="studentTableStaticData">School</td>
                                    <td className="studentTableData">{studentDetails.school}</td>
                                </tr>
                                <tr>
                                    <td className="studentTableStaticData">Teacher</td>
                                    <td className="studentTableData">{studentDetails.teacher_name}</td>
                                </tr>
                                <tr>
                                    <td className="studentTableStaticData">Course</td>
                                    <td className="studentTableData">{studentDetails.course}</td>
                                </tr>
                                <tr>
                                    <td className="studentTableStaticData">Date of Birth</td>
                                    <td className="studentTableData">{studentDetails.date_of_birth}</td>
                                </tr>
                                <tr>
                                    <td className="studentTableStaticData">Contact No</td>
                                    <td className="studentTableData">{studentDetails.contact_number}</td>
                                </tr>
                                <tr>
                                    <td className="studentTableStaticData">Email Address</td>
                                    <td className="studentTableData">{studentDetails.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>

                <div className="bottomButton">
                    <div><button className="backToDashboard" onClick={() => navigate(role === 'teacher' ? `/dashboard/teacher/student-profiles` : `/dashboard/student/learning-objectives`)}> BACK TO DASHBOARD </button>
                    </div>

                    <div>
                        <button className="backButton" onClick={
                            () => navigate(`/projects/projects-library`)
                        }

                        >BACK TO PROJECTS </button>
                    </div>

                </div>

            </div>
            )}
        </>
    )
}

export default StudentProfileViewerPage