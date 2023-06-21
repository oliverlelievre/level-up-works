import { Logout, Settings } from "@mui/icons-material";
import {
  Box,
  styled,
  Avatar,
  Typography,
  Menu as ProfileMenu,
  Fade,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import useGetFetch from "../../../../hooks/useGetFetch";

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

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#fff",
  textTransform: "uppercase",
}));

const ProfileLogged = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState([]);
  const open = Boolean(anchorEl);

  const { role, userId, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const apiUrlEndPoint =
    role === "teacher" ? `teacher/${userId}` : `student/${userId}`;
  const { error, isPending, data } = useGetFetch(
    `http://localhost:4000/api/v1/${apiUrlEndPoint}`
  );

  useEffect(() => {
    if (data && data.length >= 0) {
      setUserData(data[0]);
    }
  }, [data]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/#login");
  };
  return (
    <LoginBox>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {userData && (
        <Box>
          <UserBox onClick={handleClick}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={`/${userData.profile_pic}`}
              alt={userData.name}
            />
            <Typography
              variant="span"
              sx={{ fontSiize: "1rem", fontWeight: "bold" }}
            >
              {userData.name}
            </Typography>
          </UserBox>

          <ProfileMenu
            id="fade-menu"
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 4,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={() =>
                navigate(
                  role === "teacher"
                    ? `/teacher/profile/${userId}`
                    : `/student/profile/${userId}`
                )
              }
            >
              <Avatar
                src={`/${userData.profile_pic}`}
                alt={userData.name}
                sx={{ width: 30, height: 30 }}
              />
              My Profile
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={() => handleLogout()}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </ProfileMenu>
        </Box>
      )}
    </LoginBox>
  );
};

export default ProfileLogged;
