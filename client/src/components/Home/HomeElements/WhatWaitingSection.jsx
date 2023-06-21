import React, { useContext } from "react";
import { CardMedia, Container, Grid, Typography } from "@mui/material";
import { SectionBox } from "../../../styles/General/Layout";
import { LevelUpButtons } from "../../../styles/General/Buttons";
import Classroom from "../../../assets/Home/classroom.png";
import { ModalContext } from "../../../contexts/ModalContext";

const WhatWaitingSection = () => {
  const { handleModalOpen, accessType } = useContext(ModalContext);
  return (
    <SectionBox>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 12 }}>
          <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
            <CardMedia
              component="img"
              image={Classroom}
              alt="Students in the classroom"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            direction={"column"}
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            sx={{
              padding: { xs: "1rem", md: "2rem" },
              mt: { xs: "0.85rem", md: "2.125rem" },
            }}
          >
            <Grid item xs>
              <Typography variant="h4" component="h4" mb={4}>
                What are you waiting for?
              </Typography>
              <Typography variant="h6" component="h6" mb={4}>
                Start teaching Digital Technologies today.
              </Typography>
              <Typography variant="p" component="p" mb={4}>
                If you need more information, we are happy to answer any
                questions you may have.
              </Typography>
            </Grid>
            <Grid item xs container spacing={5}>
              <Grid item xs>
                <LevelUpButtons variant="contained" className="primary-btn">
                  ENQUIRE NOW
                </LevelUpButtons>
              </Grid>
              <Grid item xs>
                <LevelUpButtons
                  variant="contained"
                  className="secondary-btn"
                  onClick={() =>
                    handleModalOpen(
                      accessType === "sign-up" ? "sign-up" : "sign-up"
                    )
                  }
                >
                  SIGN UP
                </LevelUpButtons>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SectionBox>
  );
};

export default WhatWaitingSection;
