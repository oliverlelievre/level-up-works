import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { SectionBox } from "../../../styles/General/Layout";
import { LevelUpButtons } from "../../../styles/General/Buttons";
import programmes from "./ProgrammeSection/programmeData";
import ProgrammeDisplay from "./ProgrammeSection/ProgrammeDisplay";

const ProgrammeSection = () => {
  const [selectedButton, setSelectedButton] = useState("key-btn");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <SectionBox flexDirection="column">
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          ml={2}
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h4" component="h4" align="center">
              How our programme helps teachers and schools
            </Typography>
          </Grid>
          <Grid
            item
            container
            sx={{
              justifyContent: { sx: "center", md: "space-around" },
              alignItems: "center",
              gap: { xs: "0.95rem", md: "0" },
            }}
          >
            {programmes.map((programme) => (
              <Grid item xs={6} md={3} key={programme.id}>
                <LevelUpButtons
                  id={programme.id}
                  variant="contained"
                  className={`primary-btn ${
                    programme.btnName === selectedButton && "selected"
                  }`}
                  onClick={() => handleButtonClick(programme.btnName)}
                >
                  {programme.name}
                </LevelUpButtons>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <ProgrammeDisplay
        selectedButton={selectedButton}
        programmes={programmes}
      />
    </SectionBox>
  );
};

export default ProgrammeSection;
