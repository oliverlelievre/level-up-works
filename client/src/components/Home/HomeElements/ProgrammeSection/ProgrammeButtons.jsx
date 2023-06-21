import { Box, Grid } from "@mui/material";
import React from "react";
import { LevelUpButtons } from "../../../../styles/General/Buttons";

const ProgrammeButtons = ({ programme, index, onClick, selectedButton }) => {
  return (
    <Box item xs={12} md={3} key={index}>
      <LevelUpButtons
        id={programme.id}
        variant="contained"
        className={`primary-btn ${
          programme.btnName === selectedButton && "selected"
        }`}
        onClick={() => onClick(programme.btnName)}
      >
        {programme.name}
      </LevelUpButtons>
    </Box>
  );
};

export default ProgrammeButtons;
