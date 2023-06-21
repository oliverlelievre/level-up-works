import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, CardMedia } from "@mui/material";

import Lappy1 from "../../../../assets/Home/laptop1.png";
import Lappy2 from "../../../../assets/Home/laptop2.png";
import Lappy3 from "../../../../assets/Home/laptop3.png";
import Lappy4 from "../../../../assets/Home/laptop4.png";

const images = [Lappy1, Lappy2, Lappy3, Lappy4];

const Slider = ({ imageClick, handleImageClick }) => {
  return (
    <Carousel
      animation="slide"
      autoPlay={true}
      navButtonsAlwaysVisible={true}
      index={imageClick}
      onSlideChanged={handleImageClick}
      indicatorContainerProps={{
        sx: {
          display: "flex",
          justifyContent: "center",
          mb: 1,
        },
      }}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        sx: {
          borderRadius: "50%",
          color: "text.primary",
          bgcolor: "#707070",
          display: { xs: "none", sm: "none", md: "flex" },
          "&.Mui-disabled": {
            bgcolor: "grey.100",
            color: "grey.500",
            boxShadow: "none",
          },
          "&:hover": {
            bgcolor: "#6C6C6C",
            color: "#fff",
          },
        },
      }}
      indicatorIconButtonProps={
        {
          // color: 'primary',
          // sx: {
          //   '&.Mui-selected': {
          //     bgcolor: 'primary.main',
          //     color: 'primary.contrastText'
          //   }
          // }
        }
      }
      activeIndicatorIconButtonProps={
        {
          // color: 'secondary',
          // sx: {
          //   bgcolor: 'secondary.main',
          //   '&.Mui-selected': {
          //     color: 'secondary.contrastText'
          //   }
          // }
        }
      }
      // Next two props not necessary when using autoPlay
      // cycleNavigation={true}
      // navButtonsAlwaysInvisible={true}
      timeout={500}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            height: 350,
          }}
        >
          <CardMedia component="img" image={image} alt={`Slide ${index}`} />
        </Box>
      ))}
    </Carousel>
  );
};

export default Slider;
