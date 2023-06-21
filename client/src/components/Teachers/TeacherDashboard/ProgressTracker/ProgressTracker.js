import React from "react";

import Tracker from "./ProgressElements/Tracker"; // Child component

import styles from "./ProgressTracker.module.css"; // CSS module

import useGetFetch from "../../../../hooks/useGetFetch";
import { Box, Container, Typography } from "@mui/material";
import { DashContentViewInnerContainer } from "../../../../styles/Dashboard/DashContainers";
import ExportProgress from "./ProgressElements/ExportProgress";

function ProgressTracker() {
  const {
    error,
    isPending,
    data: progressTracker,
  } = useGetFetch(`http://localhost:4000/api/v1/progressTracker`);

  const fileName = "Progress_Report";

  return (
    // MUI Box component
    <Box
      sx={{
        p: 1,
        pb: 5,
        bgcolor: "#FFFFFF80",
        borderRadius: "30px",
        overflow: "hidden",
        height: "80%",
      }}
    >
      {/* MUI Container component */}
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          {/* // MUI Typography component */}
          <Typography
            variant="h1"
            component="h6"
            sx={{
              textAlign: "left",
              textTransform: "uppercase",
              fontFamily: "Nunito, sans-serif",
              fontSize: "30px",
              fontWeight: 900,
            }}
          >
            Beginner Course
          </Typography>
          <ExportProgress apiData={progressTracker} fileName={fileName} />
          {/* //
          Export componenent */}
        </Box>
        <DashContentViewInnerContainer>
          {error && <div>{error}</div>}
          {/* // Mapping the endpoint to the component */}
          {isPending && <div>Loading...</div>}
          {progressTracker &&
            progressTracker.map((result) => (
              <div key={result.student_id} className={styles.card_horizontal}>
                <div className={styles.card_title}>
                  <h2
                    style={{
                      fontSize: "20px",
                      color: "#707070",
                      textAlign: "left",
                    }}
                  >
                    {result.name}
                    {/* // Student name in the component */}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#707070",
                      textAlign: "left",
                    }}
                  >
                    {result.projects_completed}/{result.total_projects} Projects
                    Completed
                  </p>
                </div>
                <div className={styles.card_progress}>
                  <Tracker
                    totalProjects={result.total_projects}
                    // Passing the props to the child component
                    projectsCompleted={result.completed_projects_ids} // Passing the props to the child component
                  />
                </div>
              </div>
            ))}
        </DashContentViewInnerContainer>
      </Container>
    </Box>
  );
}
export default ProgressTracker;
