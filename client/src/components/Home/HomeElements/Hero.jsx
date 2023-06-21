import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import {
  HeroBox,
  HeroTitle,
  HeroSignUpBox,
} from "../../../styles/Home/heroStyles";
import { LevelUpButtons } from "../../../styles/General/Buttons";
import { ModalContext } from "../../../contexts/ModalContext";

const Hero = () => {
  const { handleModalOpen, accessType } = useContext(ModalContext);

  return (
    <HeroBox>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent={{ xs: "flex-end", md: "flex-start" }}
          alignItems={{ xs: "flex-end", md: "flex-start" }}
          zIndex={1}
          marginLeft={{ xs: "0", md: "2rem" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            justifyContent={{ xs: "flex-end", md: "flex-start" }}
            alignItems={{ xs: "flex-end", md: "flex-start" }}
          >
            <HeroTitle component="h1">
              Prepare young minds for a better{" "}
              <span className="future">future.</span>
            </HeroTitle>
            <Typography variant="p" component="p" className="header-subtitle">
              Let us help you advance students in Digital Technologies and other
              learning areas with our project-based learning programme.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                justifyContent: "flex-end",
                mt: "2rem",
                mr: "4rem",
              }}
            >
              <Box>
                <LevelUpButtons variant="contained" className="primary-btn">
                  LEARN MORE
                </LevelUpButtons>
              </Box>
              <HeroSignUpBox
                sx={{
                  ml: { md: "1rem", xs: "0" },
                  mt: { md: "0", xs: "1rem" },
                }}
              >
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
                <Typography
                  variant="p"
                  component="p"
                  className="subscription-btn-text"
                >
                  *Basic subscription includes the first 15 projects free of
                  charge.
                </Typography>
              </HeroSignUpBox>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};

export default Hero;
