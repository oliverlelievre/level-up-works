import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import FooterPaged from "../components/Navigation/Footer/FooterPaged";
import NavigationPaged from "../components/Navigation/NavBar/NavigationPaged";
import { LevelUpButtons } from "../styles/General/Buttons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const NoMatch = () => {
  const { role, isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <Box>
      <NavigationPaged />
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h1">404 - Page Not Found</Typography>
          <Typography variant="h4">
            The page you are looking for does not exist.
          </Typography>
          <Typography variant="p">
            Please check the URL in the address bar and try again.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "3rem",
              gap: "3rem",
            }}
          >
            <LevelUpButtons
              variant="contained"
              className="btn primary-btn"
              onClick={() => navigate("/")}
            >
              Back to Home
            </LevelUpButtons>
            {isLoggedIn && (
              <LevelUpButtons
                variant="contained"
                className="btn secondary-btn"
                onClick={() =>
                  navigate(
                    role === "teacher"
                      ? `/dashboard/teacher/progress-tracker`
                      : `/dashboard/student/learning-objectives`
                  )
                }
              >
                Back to Dashboard
              </LevelUpButtons>
            )}
          </Box>
        </Box>
      </Container>
      <FooterPaged />
    </Box>
  );
};

export default NoMatch;
