import { Box, styled } from "@mui/material";
import React from "react";

import { DrawerHeader } from "../../styles/Dashboard/leftSidebar";
import { Outlet, useLocation } from "react-router-dom";
import LearningObjectives from "../../components/Students/StudentDashboard/LearningObjectives/LearningObjectives";
import Instructions from "../../components/Students/StudentDashboard/Instructions/Instructions";
import VideoTutorial from "../../components/Students/StudentDashboard/VideoTutorial/VideoTutorial";
import MakeProject from "../../components/Students/StudentDashboard/MakeProject/MakeProject";
import SubmitProject from "../../components/Students/StudentDashboard/SubmitProject/SubmitProject";

const Main = styled(Box)(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
}));

const StudentDashboard = ({ studentDashProps }) => {
  const { navbarHeight, footerHeight } = studentDashProps;
  const location = useLocation();
  return (
    <Main
      component="main"
      sx={{
        height: `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`,
      }}
    >
      <DrawerHeader />
      <Outlet />
    </Main>
  );
};

export default StudentDashboard;
