import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Link,
  styled,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import LoginElm from "./LoginElm";
import LangElm from "./LangElm";

const MobileMenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  textTransform: "uppercase",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  display: { xs: "block", md: "none" },
  width: { xs: "100%", md: "auto" },

  backgroundColor: "#70707067",
  "&.MuiPaper-root": {
    marginRight: "-1rem",
  },
  "& ul": {
    backgroundColor: "#B2E4FA",
    height: "100%",
    width: "100%",
    minWidth: "11rem",
  },
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: "#B2E4FA",
  color: "#707070",
  textTransform: "uppercase",
  fontWeight: "bold",
}));
const MenuItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
}));

const MenuItemContent = styled(Box)(({ theme }) => ({
  display: "block",
  borderBottom: "1px solid #707070",
  borderLeft: "1px solid #707070",
  margin: "0.5rem 0",
  padding: "0.5rem 0",
  paddingRight: "0.75rem",
  textAlign: "center",
  "&:hover, :focus": {
    borderTop: "1px solid #707070",
    borderRight: "1px solid #707070",
    "& a": {
      color: "#0d1e25",
    },
  },
}));

const StyledMobileLink = styled(Link)(({ theme }) => ({
  color: "#707070",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  marginLeft: "0.50rem",
  marginBottom: "0.75rem",
}));

const MobileMenu = ({ pages, renderSwitch }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MobileMenuBox>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ fontSize: "1.25rem", ml: "auto" }}
      >
        <MenuIcon sx={{ width: "2em", height: "2em" }} />
      </IconButton>
      <StyledMenu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <StyledMenuItem onClick={handleCloseNavMenu}>
          <MenuItemContainer>
            {pages.map((page) => (
              <MenuItemContent key={page}>
                <StyledMobileLink href={renderSwitch(page)}>
                  {page}
                </StyledMobileLink>
              </MenuItemContent>
            ))}
          </MenuItemContainer>
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem onClick={handleCloseNavMenu}>
          <LoginElm />
        </StyledMenuItem>

        <Divider />
        <StyledMenuItem onClick={handleCloseNavMenu}>
          <LangElm />
        </StyledMenuItem>
      </StyledMenu>
    </MobileMenuBox>
  );
};

export default MobileMenu;
