import React, { useContext, useEffect, useState } from "react";
import { DrawerHeader } from "../../../../styles/Dashboard/leftSidebar";
import {
  Avatar,
  Box,
  CardMedia,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  teacherSBMenuLinks,
  teacherSBLearnMenuLinks,
} from "../SideBarData/TeacherMenuItems";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import SidebarFooterMenu from "./SidebarFooterMenu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useGetFetch from "../../../../hooks/useGetFetch";
import { AuthContext } from "../../../../contexts/AuthContext";

const TeacherSideBar = ({ teacherSBProps }) => {
  const { open, handleDrawerOpen, handleDrawerClose } = teacherSBProps;

  const { userId } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const { error, isPending, data } = useGetFetch(
    `http://localhost:4000/api/v1/teacher/${userId}`
  );

  useEffect(() => {
    if (data && data.length >= 0) {
      setUserData(data[0]);
    }
  }, [data]);

  return (
    <Box>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {userData && (
        <DrawerHeader
          open={open}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            mt: "1rem",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/teacher/profile/${userId}`)}
        >
          <Avatar
            alt={userData.name}
            src={`/${userData.profile_pic}`}
            sx={{ width: open ? 75 : 40, height: open ? 75 : 40 }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#707070",
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              fontWeight: "900",
              ...(!open && { display: "none" }),
            }}
          >
            {userData.name}
          </Typography>
        </DrawerHeader>
      )}
      <List
        sx={{
          mb: open ? "1.25rem" : "1.65rem",
          "&.MuiList-root a": {
            textDecoration: "none",
          },
          "&.MuiList-root a.active  > .Mui-selected": {
            backgroundColor: "#B2E4FA",
            mr: 0,
            "& .MuiTypography-root": {
              color: "#707070",
              borderColor: "#B2E4FA",
            },
          },
        }}
      >
        {(location.pathname.startsWith("/dashboard/teacher-learning")
          ? teacherSBLearnMenuLinks
          : teacherSBMenuLinks
        ).map((sideNavMenuItem) => (
          <NavLink
            key={sideNavMenuItem.id}
            to={sideNavMenuItem.path}
            sx={{
              display: "block",
              textDecoration: "none !important",
              maxHeight: 48,
              justifyContent: open ? "initial" : "center",
              pr: 2.5,
              mr: 2.5,
            }}
          >
            <ListItemButton
              selected={location.pathname === sideNavMenuItem.path}
              sx={{
                maxHeight: 48,
                justifyContent: open ? "initial" : "center",
                pr: 2.5,
                mr: 2.5,
                "&:hover": {
                  backgroundColor: "#B2E4FA",
                  mr: 0,
                  "& .MuiTypography-root": {
                    color: "#707070",
                  },
                  "& .MuiCardMedia-root": {
                    content: `url(${sideNavMenuItem.imgSrcSelected})`,
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(!open && {
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }),
                }}
              >
                <CardMedia
                  component="img"
                  height={open ? "25px" : "32px"}
                  image={
                    location.pathname === sideNavMenuItem.path
                      ? sideNavMenuItem.imgSrcSelected
                      : sideNavMenuItem.imgSrc
                  }
                  alt={sideNavMenuItem.title}
                  sx={{
                    ...(!open && {
                      m:
                        location.pathname === sideNavMenuItem.path
                          ? "20px"
                          : "20px",
                      pr:
                        location.pathname === sideNavMenuItem.path
                          ? "20px"
                          : "",
                      mt: "20px",
                      pl: "20px",
                    }),
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={sideNavMenuItem.title}
                sx={{
                  "& .MuiTypography-root": {
                    display: open ? "block" : "none",
                    opacity: open ? 1 : 0,
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: "Open Sans, san-serif",
                    textAlign: "left",
                  },
                }}
              />
            </ListItemButton>
          </NavLink>
        ))}
      </List>
      <IconButton
        color="inherit"
        aria-label="close drawer"
        onClick={handleDrawerClose}
        edge="end"
        size="small"
        sx={{
          "&.MuiIconButton-root": {
            backgroundColor: "#B2E4FA",
            border: "1px #B2E4FA",
            borderRadius: "10px 0 0 10px",
            width: "62px",
            height: "68px",
            float: "right",
            right: "0",
            ml: "auto",
            mt: 3,
          },
          "&:hover": {
            backgroundColor: "#7cc6e6",
          },
          "& .MuiSvgIcon-root": {
            color: "#F91C84",
            width: "62px",
            height: "68px",
          },

          ...(!open && { display: "none" }),
        }}
      >
        <ArrowLeft />
      </IconButton>
      <Box
        sx={{
          position: "fixed",
          bottom: "0px",
          ml: "1rem",
          ...(!open && {
            mx: "auto 0",
            mt: "1rem",
            pt: "1rem",
            bottom: "10px",
            left: "25px",
          }),
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          size="small"
          sx={{
            "&.MuiIconButton-root": {
              backgroundColor: "#B2E4FA",
              border: "1px #B2E4FA",
              borderRadius: "0 10px 10px 0",
              width: "62px",
              height: "68px",
            },
            "&:hover": {
              backgroundColor: "#7cc6e6",
            },
            "& .MuiSvgIcon-root": {
              color: "#F91C84",
              width: "62px",
              height: "68px",
            },
            ...(!open && {
              position: "fixed",
              left: "0px",
              bottom: "0px",
              mb: "9%",
            }),

            ...(open && { display: "none" }),
          }}
        >
          <ArrowRight />
        </IconButton>
        <SidebarFooterMenu open={open} />
      </Box>
    </Box>
  );
};

export default TeacherSideBar;
