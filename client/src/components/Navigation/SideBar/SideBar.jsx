import React, { useContext } from "react";

import { MuiDrawer } from "../../../styles/Dashboard/leftSidebar";
import { useNavigate } from "react-router-dom";
import TeacherSideBar from "./SidebarElements/TeacherSideBar";
import { AuthContext } from "../../../contexts/AuthContext";
import StudentSideBar from "./SidebarElements/StudentSideBar";

const SideBar = ({ sideBarProps }) => {
  const { navbarHeight, open, setOpen } = sideBarProps;

  const { role } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <MuiDrawer
      variant="permanent"
      open={open}
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#43C0F6",
          zIndex: 1,
          top: `${navbarHeight}px`,
          border: "none",
        },
      }}
    >
      {role === "teacher" && (
        <TeacherSideBar
          teacherSBProps={{
            open: open,
            handleDrawerOpen: handleDrawerOpen,
            handleDrawerClose: handleDrawerClose,
            navigate: navigate,
          }}
        />
      )}

      {role === "student" && (
        <StudentSideBar
          studentSBProps={{
            open: open,
            handleDrawerOpen: handleDrawerOpen,
            handleDrawerClose: handleDrawerClose,
            navigate: navigate,
          }}
        />
      )}
    </MuiDrawer>
  );
};

export default SideBar;
