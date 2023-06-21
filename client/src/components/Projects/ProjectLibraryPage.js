import React, { useContext } from "react"
import styles from "./ProjectLibraryPage.module.css"
import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
// import useGetFetch from "../../store/useGetFetch";

function ProjectLibraryPage() {

    const navigate = useNavigate();
    const { role } = useContext(AuthContext);

    // All projects saved in this state variable
    const [results, setResults] = useState([]);
    const [isFreeChecked, setIsFreeChecked] = useState(true) //Free checkbox checked = false
    const [isPremiumChecked, setIsPremiumChecked] = useState(false) //Subscription checkbox checked = false
    const [isBeginnerClicked, setIsBeginnerClicked] = useState(false)
    const [isIntermediateClicked, setIsIntermediateClicked] = useState(false)
    const [isAdvancedClicked, setIsAdvancedClicked] = useState(false)

    //INITIALLY DISPLAY FREE PROJECTS ONLY
    useEffect(() => {
        //fetching FREE projects
        fetch("http://localhost:4000/api/v1/projects/free")
            .then((response) => response.json())
            .then((data) => setResults(data));
        console.log("only free projects are displayed")

        document.getElementById("highlightShow25").style.backgroundColor = "#0E81FF";
    }, []);

    //FETCH ALL THE PROJECTS
    function fetchAllProjects() {
        //fetching ALL the projects
        fetch("http://localhost:4000/api/v1/projects")
            .then((response) => response.json())
            .then((data) => setResults(data));
    }

    const beginner = document.getElementById("beginnerHighlight");
    const intermediate = document.getElementById("intermediateHighlight");
    const advance = document.getElementById("advanceHighlight");

    function unHighlighAllDifficultyButton() {
        document.getElementById("beginnerHighlight").style.backgroundColor = "initial";
        document.getElementById("intermediateHighlight").style.backgroundColor = "initial";
        document.getElementById("advanceHighlight").style.backgroundColor = "initial";
    }

    /******************************************************* FREE AND PREMIUM FILTERS *******************************************************/

    //FETCH FREE PROJECTS
    function fetchFreeProjects() {
        //fetching FREE projects
        fetch("http://localhost:4000/api/v1/projects/free")
            .then((response) => response.json())
            .then((data) => setResults(data));
    }
    //FETCH PREMIUM PROJECTS
    function fetchPremiumProjects() {
        //fetching PREMIUM projects
        fetch("http://localhost:4000/api/v1/projects/premium")
            .then((response) => response.json())
            .then((data) => setResults(data));
    }


    //BOTH UNCHECKED = display ALL the projects = done
    //FREE checked = display only FREE projects = done
    //PREMIUM checked = display only PREMIUM projects = done
    //BOTH CHECKED = display ALL the projects = done
    const handleSubscriptionFilter = (e) => {

        const previousStateFreeCheckbox = isFreeChecked; //TRUE
        const previousStatePremiumCheckbox = isPremiumChecked; //FALSE

        const freeOrPremium = e.target.value

        if (freeOrPremium === "Free") {
            console.log("free is clicked")

            if (previousStateFreeCheckbox === true) {
                setIsFreeChecked(false)

                if (isPremiumChecked === true) {

                    fetchPremiumProjects();
                    console.log("Only premium projects are displayed")

                } else if (isPremiumChecked === false) {
                    fetchAllProjects();
                    console.log("All the projects are displayed")

                    unHighlighAllDifficultyButton();
                }

            } else if (previousStateFreeCheckbox === false) {
                setIsFreeChecked(true)

                if (isPremiumChecked === false) {
                    fetchFreeProjects();
                    console.log("only free projects are displayed")

                } else if (isPremiumChecked === true) {
                    fetchAllProjects();
                    console.log("All the projects are displayed")

                    unHighlighAllDifficultyButton();
                }
            }

        } else if (freeOrPremium === "Premium") {
            console.log("premium is clicked")

            if (previousStatePremiumCheckbox === true) {
                setIsPremiumChecked(false)

                if (isFreeChecked === true) {

                    fetchFreeProjects();
                    console.log("only free projects are displayed")

                } else if (isFreeChecked === false) {
                    fetchAllProjects();
                    console.log("All the projects are displayed")

                    unHighlighAllDifficultyButton();
                }

            } else if (previousStatePremiumCheckbox === false) {
                setIsPremiumChecked(true)

                if (isFreeChecked === false) {
                    fetchPremiumProjects();
                    console.log("Only premium projects are displayed")

                } else if (isFreeChecked === true) {
                    fetchAllProjects();
                    console.log("All the projects are displayed")

                    unHighlighAllDifficultyButton();
                }
            }
        }
    }
    /******************************************************* FREE AND PREMIUM FILTERS *******************************************************/

    /******************************************************* BEGINNER, INTERMEDIATE AND ADVANCE FILTERS *******************************************************/

    //FETCH BEGINNER PROJECTS
    function fetchBeginnerProjects() {

        setIsBeginnerClicked(true)

        //fetching BEGINNER & FREE projects
        if (isFreeChecked === true && isPremiumChecked === false) {
            fetch("http://localhost:4000/api/v1/projects/beginner/free")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("BEGINNER AND FREE are displayed");

        } else if (isPremiumChecked === true && isFreeChecked === false) {
            //fetching BEGINNER & PREMIUM projects
            fetch("http://localhost:4000/api/v1/projects/beginner/premium")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("BEGINNER AND PREMIUM are displayed");
        } else if ((isPremiumChecked === true && isFreeChecked === true) || (isPremiumChecked === false && isFreeChecked === false)) {
            //fetching BEGINNER PROJECTS THAT ARE FREE & PREMIUM
            fetch("http://localhost:4000/api/v1/projects/beginner/freeAndPremium")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("BEGINNER: FREE AND PREMIUM are displayed");
        }
    }

    //FETCH INTERMEDIATE PROJECTS
    function fetchIntermediateProjects() {
        setIsIntermediateClicked(true)

        //fetching INTERMEDIATE & FREE projects
        if (isFreeChecked === true && isPremiumChecked === false) {
            fetch("http://localhost:4000/api/v1/projects/intermediate/free")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("INTERMEDIATE AND FREE are displayed");

        } else if (isPremiumChecked === true && isFreeChecked === false) {
            //fetching INTERMEDIATE & PREMIUM projects
            fetch("http://localhost:4000/api/v1/projects/intermediate/premium")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("INTERMEDIATE AND PREMIUM are displayed");

        } else if ((isPremiumChecked === true && isFreeChecked === true) || (isPremiumChecked === false && isFreeChecked === false)) {
            //fetching INTERMEDIATE PROJECTS THAT ARE FREE & PREMIUM
            fetch("http://localhost:4000/api/v1/projects/intermediate/freeAndPremium")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("INTERMEDIATE: FREE AND PREMIUM are displayed");
        }
    }

    //FETCH ADVANCE PROJECTS
    function fetchAdvanceProjects() {
        setIsAdvancedClicked(true)

        //fetching ADVANCE & FREE projects
        if (isFreeChecked === true && isPremiumChecked === false) {
            fetch("http://localhost:4000/api/v1/projects/advance/free")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("ADVANCE AND FREE are displayed");

        } else if (isPremiumChecked === true && isFreeChecked === false) {
            //fetching ADVANCE & PREMIUM projects
            fetch("http://localhost:4000/api/v1/projects/advance/premium")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("ADVANCE AND PREMIUM are displayed");

        } else if ((isPremiumChecked === true && isFreeChecked === true) || (isPremiumChecked === false && isFreeChecked === false)) {
            //fetching ADVANCE PROJECTS THAT ARE FREE & PREMIUM
            fetch("http://localhost:4000/api/v1/projects/advance/freeAndPremium")
                .then((response) => response.json())
                .then((data) => setResults(data));
            console.log("ADVANCE: FREE AND PREMIUM are displayed");
        }
    }


    const handleDifficultyLevelFilter = (e) => {

        const difficultyLevel = e.target.value
        console.log("difficultyLevel" + difficultyLevel)

        if (difficultyLevel === "Beginner") {
            console.log("Beginner is clicked")

            beginner.style.backgroundColor = "#0E81FF";
            intermediate.style.backgroundColor = "initial";
            advance.style.backgroundColor = "initial";

            setIsIntermediateClicked(false)
            setIsAdvancedClicked(false)
            fetchBeginnerProjects();

        } else if (difficultyLevel === "Intermediate") {
            console.log("Intermediate is clicked")

            intermediate.style.backgroundColor = "#0E81FF";
            beginner.style.backgroundColor = "initial";
            advance.style.backgroundColor = "initial";

            setIsBeginnerClicked(false)
            setIsAdvancedClicked(false)
            fetchIntermediateProjects();

        } else if (difficultyLevel === "Advance") {
            console.log("Advance is clicked")

            advance.style.backgroundColor = "#0E81FF";
            beginner.style.backgroundColor = "initial";
            intermediate.style.backgroundColor = "initial";

            setIsBeginnerClicked(false)
            setIsIntermediateClicked(false)
            fetchAdvanceProjects();
        }
    }

    /******************************************************* BEGINNER, INTERMEDIATE AND ADVANCE FILTERS *******************************************************/

    // BACK TO TOP BUTTON
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className={styles.projectContainer} >

            <div className={styles.projectSidebar} >
                {/* Side Bar - Subscription Checkbox  */}
                <div className={styles.checkboxContainer} >
                    <p>SUBSCRIPTION</p>
                    <div className={styles.checkboxOptions} >

                        <input className={styles.checkboxIcon} type="checkbox" id="freeCheckbox" value='Free' checked={isFreeChecked} onChange={handleSubscriptionFilter}></input>
                        <span className={styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Free</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox" id="premiumCheckbox" value='Premium' checked={isPremiumChecked} onChange={handleSubscriptionFilter}></input>
                        <span className={styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Premium</label>
                        < br />
                    </div>
                </div>


                {/* Side Bar - Activity Type Checkbox  */}
                <div className={
                    styles.checkboxContainer}>
                    <p>ACTIVITY TYPE</p>
                    <div className={styles.checkboxOptions}>
                        < input className={
                            styles.checkboxIcon} type="checkbox" defaultChecked></input>
                        <span className={styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Animation</label>
                        < br />
                        <input className={styles.checkboxIcon} type="checkbox"></input>
                        < span className={
                            styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Game</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox"></input>
                        < span className={
                            styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Chatbot</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox"></input>
                        < span className={
                            styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Augmented Reality</label>
                        <br></br>
                    </div>
                </div>


                {/* Side Bar - Year level Checkbox  */}
                <div className={
                    styles.checkboxContainer}>
                    <p>YEAR LEVEL</p>
                    <div className={styles.checkboxOptions}>
                        < input className={
                            styles.checkboxIcon} type="checkbox" defaultChecked></input>
                        <span className={styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>1 - 4</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox" defaultChecked></input>
                        < span className={
                            styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>5 - 6</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox"></input>
                        < span className={styles.checkMark} ></span >
                        <label className={styles.checkboxOptionName}>7 - 8</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox"></input >
                        <span className={styles.checkMark} ></span>
                        <label className={styles.checkboxOptionName} >9 - 13</label>
                        <br></br>
                    </div>
                </div>


                {/* Side Bar - Subject Matter Checkbox  */}
                <div className={styles.checkboxContainer} >
                    <p> SUBJECT MATTER</p>
                    <div className={styles.checkboxOptions} >
                        <input className={styles.checkboxIcon} type="checkbox" defaultChecked></input>
                        <span className={styles.checkMark} ></span>
                        <label className={styles.checkboxOptionName} >Computer Science</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox"></input>
                        <span className={styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Maths</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox"></input>
                        <span className={styles.checkMark} ></span>
                        <label className={styles.checkboxOptionName}>Science</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox" ></input>
                        <span className={styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Language</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox"></input>
                        <span className={styles.checkMark}></span>
                        <label className={styles.checkboxOptionName}>Art</label>
                        <br></br>
                        <input className={styles.checkboxIcon} type="checkbox"></input>
                        <span className={styles.checkMark} ></span>
                        <label className={styles.checkboxOptionName}>Music</label>
                        <br></br>
                    </div>
                </div>
            </div>


            <div className={styles.projectContent}>

                <div className={styles.pageHeading}>
                    <h1 className={styles.heading}>PROJECTS</h1>
                    <p className={styles.description}>Welcome to the project library. You can use the filters on the right to help you search for the specific projects.</p>
                </div>


                <div className={styles.buttons}>
                    <span className={styles.buttons1}>
                        <button className={styles.beginnerButton} id="beginnerHighlight" value='Beginner' onClick={handleDifficultyLevelFilter}>BEGINNER</button>
                        <button className={styles.intermediateButton} id="intermediateHighlight" value='Intermediate' onClick={handleDifficultyLevelFilter}>INTERMEDIATE</button>
                        <button className={styles.advanceButton} id="advanceHighlight" value='Advance' onClick={handleDifficultyLevelFilter}>ADVANCED</button>
                    </span>

                    <span className={styles.buttons2}>
                        <span className={styles.show}>SHOW</span>
                        <button className={styles.numberedButton1} id="highlightShow25">25</button>
                        <button className={styles.numberedButtonMid}>50</button>
                        <button className={styles.numberedButton2}>100</button>
                    </span>
                </div >


                <div className={styles.projectCardsDisplay}>

                    {results.map(function (result) {
                        return (<div key={result.project_id} onClick={() => navigate(role === 'teacher' ? `/dashboard/teacher-learning/learning-objectives` : `/dashboard/student/learning-objectives`)}>

                            <img className={styles.projectAvatar} src={`/${result.project_pic}`} alt="project"></img>
                            <p className={styles.projectName}>{result.name}</p>
                            <span><span className={styles.projectCourse}>{result.course} |</span>
                                <span className={styles.projectActivityType}> {result.activity_type}</span></span>
                        </div>)
                    })}
                </div>

                <div><button className={styles.backToTopButton} onClick={scrollToTop}> BACK TO TOP </button>
                </div>
                {role === "teacher" &&
                    (<div>
                        <button className={styles.backToDashboard} onClick={() => navigate(`/dashboard/teacher/progress-tracker`)}> BACK TO DASHBOARD </button>
                    </div>)
                }
            </div>
        </div>
    );
};


export default ProjectLibraryPage