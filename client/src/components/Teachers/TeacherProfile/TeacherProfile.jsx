import React from "react";
import NavigationLogged from "../../Navigation/NavBar/NavigationLogged";
import FooterPaged from "../../Navigation/Footer/FooterPaged";
import ProfileViewer from "./ProfileElements/ProfileViewer";

const TeacherProfile = () => {
  return (
    <>
      <NavigationLogged />
      <ProfileViewer />
      <FooterPaged />
    </>
  );
};

export default TeacherProfile;
