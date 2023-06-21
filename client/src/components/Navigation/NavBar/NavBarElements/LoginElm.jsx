import { Box, styled, Link, Divider } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import React, { useContext } from "react";
import { ModalContext } from "../../../../contexts/ModalContext";

const LoginBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "0.3rem",
  marginBottom: "0.65rem",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  display: "block",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  "&:hover": {
    color: "#707070",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
    fontWeight: "500",
  },
  [theme.breakpoints.down("sm")]: {
    color: "#707070",
    fontWeight: "bold",
    "&:hover, :focus": {
      paddingTop: "0.25rem",
      paddingRight: "0.5rem",
      borderTop: "1px solid #707070",
      borderRight: "1px solid #707070",
      color: "#0d1e25",
    },
  },
}));

const LoginElm = () => {
  const { handleModalOpen, accessType } = useContext(ModalContext);
  return (
    <LoginBox>
      <AccountCircle
        sx={{
          width: { xs: 12, md: 18, lg: 24 },
          height: { xs: 12, md: 18, lg: 24 },
        }}
      />
      <StyledLink
        href="#signup"
        onClick={() =>
          handleModalOpen(accessType === "sign-up" ? "sign-up" : "sign-up")
        }
      >
        Register
      </StyledLink>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          border: { xs: "1px solid #707070", md: "1px solid white" },
          height: { md: "0.8rem", lg: "1rem" },
        }}
      />
      <StyledLink
        href="#login"
        onClick={() =>
          handleModalOpen(accessType === "log-in" ? "log-in" : "log-in")
        }
      >
        Login
      </StyledLink>
    </LoginBox>
  );
};

export default LoginElm;
