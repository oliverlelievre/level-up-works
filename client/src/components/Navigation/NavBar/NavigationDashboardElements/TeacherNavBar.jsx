import { Box, styled } from "@mui/material";
import React from "react";
import { NavigationBtns } from "../../../../styles/General/Buttons";

import { useNavigate } from "react-router-dom";

const MenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginTop: "2rem",
  marginBottom: "0.65rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const navigationBtns = [
  {
    name: "Take Screenshots",
    classname: "tertiary-btn",
    path: `/dashboard/teacher/take-screenshots`,
  },
  {
    name: "Help Centre",
    classname: "secondary-btn",
    path: `/dashboard/teacher/help-centre`,
  },
  {
    name: "More Projects",
    classname: "primary-btn",
    path: `/projects/projects-library`,
  },
];

const TeacherNavBar = () => {
  const navigate = useNavigate();

  return (
    <MenuBox>
      {navigationBtns.map((btn, index) => (
        <Box key={index} sx={{ mx: 2 }}>
          <NavigationBtns
            variant="contained"
            className={btn.classname}
            onClick={() => navigate(btn.path)}
          >
            {btn.name}
          </NavigationBtns>
        </Box>
      ))}
    </MenuBox>
  );
};

export default TeacherNavBar;
