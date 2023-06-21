import React, { useContext, useEffect, useRef, useState } from "react";
import StudentDashboard from "./Dashboard/StudentDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard";
import NavigationDashboard from "../components/Navigation/NavBar/NavigationDashboard";
import SideBar from "../components/Navigation/SideBar/SideBar";
import { Box, Stack } from "@mui/material";
import FooterDashboard from "../components/Navigation/Footer/FooterDashboard";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import TeacherLearningDashboard from "./Dashboard/TeacherLearningDashboard";

const Dashboard = () => {
  const { role } = useContext(AuthContext);

  const location = useLocation();

  const [open, setOpen] = useState(true);

  const appBarRef = useRef(null);
  const footerRef = useRef(null);

  const [navbarHeight, setNavbarHeight] = useState(appBarRef);
  const [footerHeight, setFooterHeight] = useState(footerRef);

  useEffect(() => {
    if (navbarHeight.current) {
      setNavbarHeight(navbarHeight.current.offsetHeight);
    }
    if (footerHeight.current) {
      setFooterHeight(footerHeight.current.offsetHeight);
    }
  }, [navbarHeight, footerHeight]);

  return (
    <Box
      className="dashboard"
      sx={{
        backgroundColor: "#B2E4FA",
        top: `${navbarHeight}px`,
      }}
    >
      <NavigationDashboard role={role} ref={appBarRef} />
      <Stack direction="row" spacing={2}>
        <SideBar
          sideBarProps={{
            navbarHeight: navbarHeight,
            open: open,
            setOpen: setOpen,
          }}
        />
        {role === "teacher" &&
        location.pathname.startsWith("/dashboard/teacher-learning") ? (
          <TeacherLearningDashboard
            navbarHeight={navbarHeight}
            footerHeight={footerHeight}
          />
        ) : (
          <TeacherDashboard
            teacherDashProps={{
              navbarHeight: navbarHeight,
              footerHeight: footerHeight,
            }}
          />
        )}
        {role === "student" && (
          <StudentDashboard
            studentDashProps={{
              navbarHeight: navbarHeight,
              footerHeight: footerHeight,
            }}
          />
        )}
      </Stack>
      <FooterDashboard ref={footerRef} />
    </Box>
  );
};

export default Dashboard;
