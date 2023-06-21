import React, { useState } from "react";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { SectionBox } from "../../../styles/General/Layout";
import HomeCarousel from "./Slider/HomeCarousel";
import Animation from "../../../assets/Home/animation.png";
import Games from "../../../assets/Home/games.png";
import Chatbots from "../../../assets/Home/chatbots.png";
import AugReality from "../../../assets/Home/augreality.png";

const itemData = [
  {
    name: "Animation",
    src: Animation,
  },
  {
    name: "Games",
    src: Games,
  },
  {
    name: "Chatbots",
    src: Chatbots,
  },
  {
    name: "Augmented Reality",
    src: AugReality,
  },
];

const AboutSection = () => {
  const theme = useTheme();
  const imageHeight = theme.breakpoints.values.md > 960 ? "20%" : "5%";
  const imageWidth = "100%";

  const [imageClick, setImageClick] = useState(0);

  const handleImageClick = (index) => {
    setImageClick(index);
  };

  return (
    <SectionBox>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 2 }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" component="h3">
                What we offer
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  marginTop: 3,
                  lineHeight: 1.5,
                }}
              >
                The Creative Problem Solving programme is series of digital
                creation projects aimed to encourage self-motivation and student
                agency, designed by New Zealand’s leading IT industry experts
                and schools.
              </Typography>
              <Stack direction="column" sx={{ marginTop: 5 }}>
                <Typography variant="h6" component="h6">
                  What will students create?
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Grid container justifyContent="center" spacing={1}>
                    {itemData.map((item, index) => (
                      <Grid item key={index} xs={6} sm={4} md={3}>
                        <Box
                          sx={{
                            height: imageHeight,
                            cursor: "pointer",
                            "&:hover": { opacity: 0.5 },
                          }}
                          onClick={() => handleImageClick(index)}
                        >
                          <CardMedia
                            component="img"
                            image={item.src}
                            alt={"alt"}
                            title={item.name}
                            sx={{
                              objectFit: "contain",
                              width: imageWidth,
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeCarousel
              imageClick={imageClick}
              handleImageClick={handleImageClick}
            />
          </Grid>
        </Grid>
      </Container>
    </SectionBox>
  );
};

export default AboutSection;
