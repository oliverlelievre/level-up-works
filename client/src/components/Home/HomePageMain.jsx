import { Box } from "@mui/material";
import React from "react";
import Hero from "./HomeElements/Hero";
import AboutSection from "./HomeElements/AboutSection";
import DigitalSkillSection from "./HomeElements/DigitalSkillSection";
import ProgrammeSection from "./HomeElements/ProgrammeSection";
import WhatWaitingSection from "./HomeElements/WhatWaitingSection";

const HomePageMain = () => {
  return (
    <Box>
      <Hero />
      <AboutSection />
      <DigitalSkillSection />
      <ProgrammeSection />
      <WhatWaitingSection />
    </Box>
  );
};

export default HomePageMain;
