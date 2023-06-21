import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  Grid,
  CardMedia,
} from "@mui/material";
import { SectionBox } from "../../../styles/General/Layout";
import Creativity from "../../../assets/Home/Group1.png";
import CriticalThinking from "../../../assets/Home/Group2.png";
import Communication from "../../../assets/Home/Group3.png";
import Technology from "../../../assets/Home/Group4.png";

const programme = [
  {
    name: "Creativity & Individuality",
    src: Creativity,
  },
  {
    name: "Critical Thinking & Problem Solving",
    src: CriticalThinking,
  },
  {
    name: "Communication & Collaboration",
    src: Communication,
  },
  {
    name: "Technology & Future Focus",
    src: Technology,
  },
];

const DigitalSkillSection = () => {
  const theme = useTheme();
  const imageHeight = theme.breakpoints.values.md > 960 ? "20%" : "5%";
  const imageWidth = "100%";

  return (
    <SectionBox>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h6" align="center">
              Teaching kids programming and digital skills is <em>MORE</em> than
              just writing code.
            </Typography>
          </Grid>
          {programme.map((item, index) => (
            <Grid item key={index} xs={12} md={3}>
              <Box sx={{ height: imageHeight, cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  height={{ xs: 272 }}
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
      </Container>
    </SectionBox>
  );
};

export default DigitalSkillSection;
