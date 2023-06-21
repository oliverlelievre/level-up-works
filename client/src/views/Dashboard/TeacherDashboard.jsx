import { Box, styled } from "@mui/material";
import React from "react";
import { DrawerHeader } from "../../styles/Dashboard/leftSidebar";
import { Outlet, useLocation } from "react-router-dom";
import ProgressTracker from "../../components/Teachers/TeacherDashboard/ProgressTracker/ProgressTracker";
import StudentProfiles from "../../components/Teachers/TeacherDashboard/StudentProfiles/StudentProfiles";
import HelpRequests from "../../components/Teachers/TeacherDashboard/HelpRequests/HelpRequests";

const Main = styled(Box)(({ theme }) => ({
  position: "relative",

  flexGrow: 1,
}));
const TeacherDashboard = ({ teacherDashProps }) => {
  const { navbarHeight, footerHeight } = teacherDashProps;
  const location = useLocation();

  return (
    <Main
      component="main"
      sx={{
        height: `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`,
      }}
    >
      <DrawerHeader sx={{ height: "100px" }} />

      <Outlet />
    </Main>
  );
};

export default TeacherDashboard;
