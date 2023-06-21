import {
  Box,
  CardMedia,
  Grid,
  Container,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  LevelUpButtons,
  NavigationBtns,
} from "../../../../styles/General/Buttons";
import useGetFetch from "../../../../hooks/useGetFetch";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileViewer = () => {
  const { userId } = useContext(AuthContext);

  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  const { error, isPending, data } = useGetFetch(
    `http://localhost:4000/api/v1/teacher/${userId}`
  );

  useEffect(() => {
    if (data && data.length >= 0) {
      setUserData(data[0]);
    }
  }, [data]);

  const dateObj = new Date(userData.date_of_birth);

  const formattedDateString = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#EEEEEE",
        pt: "5rem",
      }}
    >
      <Container maxWidth="lg">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {userData && (
          <Stack direction="column" spacing={3}>
            <Grid
              container
              direction="row"
              sx={{
                gap: "3rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={3}
                container
                direction="column"
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "2px #E2DFDF",
                  borderRadius: "1.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2rem",
                  my: "2rem",
                  py: "2rem",
                }}
              >
                <Avatar
                  alt={userData.name}
                  src={`/${userData.profile_pic}`}
                  sx={{ width: 175, height: 175, mt: "3rem" }}
                />
                <LevelUpButtons variant="contained" className="primary-btn">
                  Edit Profile
                </LevelUpButtons>
                <LevelUpButtons variant="contained" className="primary-btn">
                  Change Photo
                </LevelUpButtons>
                <LevelUpButtons variant="contained" className="primary-btn">
                  Settings
                </LevelUpButtons>
              </Grid>
              <Grid
                item
                xs={7}
                container
                direction="column"
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "2px #E2DFDF",
                  borderRadius: "1.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2rem",
                  m: "2rem",
                  ml: "4rem",
                  p: "2rem",
                }}
              >
                <Grid item xs>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontFamily: "Nunito,sans-serif",
                      fontWeight: "700",
                      mb: "2rem",
                      color: "#707070",
                    }}
                  >
                    {userData.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    px: "3rem",
                    gap: "3rem",
                  }}
                >
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#A5A5A5",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      School
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#707070",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {userData.school}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    px: "3rem",
                    gap: "3rem",
                  }}
                >
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#A5A5A5",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Courses Purchased
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#707070",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Beginner
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    px: "3rem",
                    gap: "3rem",
                  }}
                >
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#A5A5A5",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Date of Birth
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#707070",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {formattedDateString}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    px: "3rem",
                    gap: "3rem",
                  }}
                >
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#A5A5A5",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Contact No
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#707070",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {userData.contact_number}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    px: "3rem",
                    gap: "3rem",
                  }}
                >
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#A5A5A5",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Email Address
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "#707070",
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {userData.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "1rem",
                mb: "2rem",
                pb: "2rem",
                pr: "5rem",
                mr: "2rem",
              }}
            >
              <NavigationBtns
                variant="contained"
                className="tertiary-btn"
                onClick={() => navigate("/projects/projects-library")}
              >
                Back to Projects
              </NavigationBtns>
              <NavigationBtns
                variant="contained"
                className="secondary-btn"
                onClick={() => navigate("/dashboard/teacher/progress-tracker")}
              >
                Back to Dashboard
              </NavigationBtns>
            </Box>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default ProfileViewer;
