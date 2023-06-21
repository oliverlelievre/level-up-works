import React from "react";
import { Box } from "@mui/material";
import Slider from "./Slider";

const HomeCarousel = ({ imageClick, handleImageClick }) => {
  return (
    <Box p={2}>
      <Slider imageClick={imageClick} handleImageClick={handleImageClick} />
    </Box>
  );
};

export default HomeCarousel;
