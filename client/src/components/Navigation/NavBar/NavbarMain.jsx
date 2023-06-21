import { AppBar, Container } from "@mui/material";
import React from "react";
import NavigationPaged from "./NavigationPaged";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#43C0F6" }}>
      <Container maxWidth="lg">
        <NavigationPaged />
      </Container>
    </AppBar>
  );
};

export default Navbar;
