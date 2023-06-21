import { Box, styled } from "@mui/material";
import React from "react";
import { DrawerHeader } from "../../styles/Dashboard/leftSidebar";
import { Outlet, useLocation } from "react-router-dom";

const Main = styled(Box)(({ theme }) => ({
  position: "relative",

  flexGrow: 1,
}));
const TeacherLearningDashboard = ({ navbarHeight, footerHeight }) => {
  // const { navbarHeight, footerHeight } = teacherDashLearningProps;
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

export default TeacherLearningDashboard;
