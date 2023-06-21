import { Box, styled } from "@mui/material";
import React from "react";
import { NavigationBtns } from "../../../../styles/General/Buttons";

const navigationBtns = [
  { name: "Take Screenshot", classname: "tertiary-btn" },
  { name: "Ask Teacher for help", classname: "secondary-btn" },
  { name: "More Projects", classname: "primary-btn" },
];

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

const StudentNavBar = () => {
  return (
    <MenuBox>
      {navigationBtns.map((btn, index) => (
        <Box key={index} sx={{ mx: 2 }}>
          <NavigationBtns variant="contained" className={btn.classname}>
            {btn.name}
          </NavigationBtns>
        </Box>
      ))}
    </MenuBox>
  );
};

export default StudentNavBar;
