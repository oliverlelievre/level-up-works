import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import FooterPaged from "./FooterPaged";
import FooterLogged from "./FooterLogged";

const Footer = () => {
  const [session, setSession] = useState("notLogged");
  let footerComponent;
  switch (session) {
    case "logged":
      footerComponent = <FooterLogged />;
      break;
    case "notLogged":
      footerComponent = <FooterPaged />;
      break;
    default:
      footerComponent = null;
  }

  return (
    <Box
      sx={{
        backgroundColor: session === "logged" ? "#fff" : "#B2E4FA",
        minHeight: session === "logged" ? "2rem" : "25rem",
      }}
    >
      <Container maxWidth="lg">{footerComponent}</Container>
    </Box>
  );
};

export default Footer;
