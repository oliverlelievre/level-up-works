import HeroBanner from "../../assets/Home/hero.png";
import { Box, Button, Typography, styled } from "@mui/material";

const HeroBox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "25rem",
  backgroundImage: `url(${HeroBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundColor: "#EFEFF1",
  color: "#6C6C6C",
  fontFamily: "Nunito, sans-serif",
  [theme.breakpoints.down("sm")]: {
    backgroundImage: `url(${HeroBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-20rem 11rem",
    backgroundSize: "64rem auto",
    overflow: "hidden",
  },
  "& .header-subtitle": {
    fontSize: "1.5rem",
    opacity: 0.8,
    marginTop: "10px",
    marginBottom: "20px",
    lineHeight: "1.5rem",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: "1rem",
      fontWeight: 500,
    },
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3.25rem",
  opacity: 0.8,
  fontWeight: "bold",
  lineHeight: "3.5rem",
  fontFamily: "Nunito, sans-serif",
  "& .future": { color: "#42C0F6", fontWeight: 900 },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    lineHeight: "2.5rem",
  },
}));

const HeroSignUpBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "4.5rem",
  "& .subscription-btn-text": {
    fontSize: "0.6rem",
    textIndent: "0.3rem",
    maxWidth: "11rem",
    textAlign: "center",
    marginTop: "0.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "1rem 0rem",
  },
}));

export { HeroBox, HeroTitle, HeroSignUpBox };
