import React from "react";
import NavigationLogged from "../../Navigation/NavBar/NavigationLogged";
import FooterPaged from "../../Navigation/Footer/FooterPaged";
import StudentProfileViewerPage from "./ProfileElements/StudentProfileViewerPage";

const StudentProfile = () => {
  return (
    <>
      <NavigationLogged />
      <StudentProfileViewerPage />
      <FooterPaged />
    </>
  );
};

export default StudentProfile;
