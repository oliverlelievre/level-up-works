import { Box, styled } from "@mui/material";
import React from "react";

const DashContentViewInnerContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "inherit",
  overflowY: "scroll",
  overflowX: "hidden",
  marginBottom: "2rem",
  "&::-webkit-scrollbar": {
    width: "8px",
    borderRadius: "15px",
  },

  "&::-webkit-scrollbar-track": {
    background: "#FFFFFFBF",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#43C0F6",
    borderRadius: "10px",
    height: "120px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
  "&::-webkit-scrollbar-track-piece:start": {
    background: "transparent",
    marginTop: "10px",
  },
  "&::-webkit-scrollbar-track-piece:end": {
    background: "transparent",
    marginTop: "40px",
  },
}));

const DashboardFooter = styled(Box)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  minHeight: "2rem",
  borderTop: "1px solid #dee2e6",
  alignItems: "center",
  textAlign: "center",
  fontFamily: "Nunito, sans-serif",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#707070",
  width: "100%",
  backgroundColor: "#FFFFFF",
  bottom: "0",
}));

export { DashContentViewInnerContainer, DashboardFooter };
