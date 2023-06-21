import { AppBar, Box, Toolbar, styled } from "@mui/material";

const DashboardNav = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#FFF",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
    fontWeight: "500",
  },
}));

const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "0.3rem",
  marginBottom: "0.65rem",
}));

const LoginPanel = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export { DashboardNav, StyledToolbar, NavBox, LoginPanel };
