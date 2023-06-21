import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import StudentsImage from "../../../assets/LoginSignup/students.png";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import usePostFetch from "../../../hooks/usePostFetch";
import { AuthContext } from "../../../contexts/AuthContext";
import { ModalContext } from "../../../contexts/ModalContext";

const StudentForm = ({ modalLinks, activeLink, handleTitleClick }) => {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const post = usePostFetch();
  const { login } = useContext(AuthContext);
  const { handleModalClose } = useContext(ModalContext);

  const handleLogin = ({ e, formData }) => {
    e.preventDefault();
    setLoading(true);
    try {
      post("http://localhost:4000/api/v1/student/login", formData, setUserData);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData) {
      login(userData);
      handleModalClose();
      navigate("/projects/projects-library", { replace: true });
    }
  }, [userData, login, handleModalClose, navigate]);

  return (
    <Grid
      item
      xs
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <Grid item xs>
        <CardMedia
          component="img"
          image={StudentsImage}
          alt="Students Image"
          sx={{
            width: "250px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Grid>
      <Grid item xs>
        <Typography
          variant="h4"
          component="p"
          sx={{
            fontFamily: "Nunito",
            fontSize: "2.625rem",
            fontWeight: 900,
            color: "#707070",
          }}
        >
          Students
        </Typography>
      </Grid>
      <Grid
        item
        xs
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        mt="2rem"
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontFamily: "Open Sans",
            fontSize: "1.125rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#707070",
            ...modalLinks({
              isActive: activeLink === "log-in",
              newLink: "log-in",
            }),
          }}
          onClick={() => handleTitleClick("log-in")}
        >
          LOG IN
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontFamily: "Open Sans",
            fontSize: "1.125rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#707070",
            ...modalLinks({
              isActive: activeLink === "sign-up",
              newLink: "sign-up",
            }),
          }}
          onClick={() => handleTitleClick("sign-up")}
        >
          SIGN UP
        </Typography>
      </Grid>
      <Grid item xs>
        {activeLink === "log-in" && <LogIn handleLogin={handleLogin} />}
        {activeLink === "sign-up" && <SignUp />}
      </Grid>
      {loading ? <p>Loading...</p> : errorMessage && <p>{errorMessage}</p>}
    </Grid>
  );
};

export default StudentForm;
