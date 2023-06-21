import React, { useContext } from "react";
import { sideBarSmallMenu } from "../SideBarData/SideBarFooterItems";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";

const SidebarFooterMenu = ({ open }) => {
  const navigate = useNavigate();
  const { role, userId, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/#login");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        ...(!open && {
          flexDirection: "column",
          justifyContent: "flex-end",

          alignItems: "flex-end",
        }),
      }}
    >
      {sideBarSmallMenu.map((smallMenu) => {
        const path =
          smallMenu.name === "Log out"
            ? "/"
            : role === "teacher"
            ? `/teacher${smallMenu.path}/${userId}`
            : `/student${smallMenu.path}/${userId}`;
        return (
          <IconButton
            key={smallMenu.name}
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={
              smallMenu.name === "Log out" ? handleLogout : () => navigate(path)
            }
          >
            {smallMenu.icon}
            <Typography
              variant="body2"
              sx={{ ...(!open && { display: "none" }) }}
            >
              {smallMenu.name}
            </Typography>
          </IconButton>
        );
      })}
    </Box>
  );
};

export default SidebarFooterMenu;
