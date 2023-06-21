import React from "react";
import ProjectLibraryPage from "../components/Projects/ProjectLibraryPage";
import FooterPaged from "../components/Navigation/Footer/FooterPaged";
import NavigationLogged from "../components/Navigation/NavBar/NavigationLogged";

const ProjectsLibrary = () => {
  return (
    <>
      <NavigationLogged />
      <ProjectLibraryPage />
      <FooterPaged />
    </>
  );
};

export default ProjectsLibrary;
