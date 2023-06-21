import React from "react"
import './StudentProfileViewerPage.module.css';
import JsonData from './StudentProfileViewerData.json';

function StudentProfileViewerPage() {

    const DisplayProfilePicture = JsonData.map(
        (info) => {
            return (
                <img className="studentpic" src={info.ProfilePhoto} alt={info.Name}></img>
            )
        });

    const DisplayData = JsonData.map(
        (info) => {
            return (

                <table className="studenttable">

                    <caption className="studentname">{info.Name}</caption>

                    <tr>
                        <td className="studenttableStaticdata">School</td>
                        <td className="studenttableJSONdata">{info.School}</td>
                    </tr>
                    <tr>
                        <td className="studenttableStaticdata">Teacher</td>
                        <td className="studenttableJSONdata">{info.Teacher}</td>
                    </tr>
                    <tr>
                        <td className="studenttableStaticdata">Course</td>
                        <td className="studenttableJSONdata">{info.Course}</td>
                    </tr>
                    <tr>
                        <td className="studenttableStaticdata">Date of Birth</td>
                        <td className="studenttableJSONdata">{info.DateofBirth}</td>
                    </tr>
                    <tr>
                        <td className="studenttableStaticdata">Contact No</td>
                        <td className="studenttableJSONdata">{info.ContactNo}</td>
                    </tr>
                    <tr>
                        <td className="studenttableStaticdata">Email Address</td>
                        <td className="studenttableJSONdata">{info.EmailAddress}</td>
                    </tr>

                </table>
            )
        }
    )

    return (
        <div className="maincontainer">

            <div className="studentpiccontainer">
                {/* <img className="studentpic" src="./RawiriFletcher.png" alt="RawiriFletcher"></img> */}

                {DisplayProfilePicture}

                <button className="studentpagebutton"> EDIT PROFILE </button>
                <button className="studentpagebutton"> CHANGE PHOTO </button>
            </div>


            <div className="studentinfocontainer">
                {DisplayData}
            </div>

            <div>
                <button className="backbutton"> BACK TO PROJECTS </button>
            </div>

        </div>
    )
}

export default StudentProfileViewerPage