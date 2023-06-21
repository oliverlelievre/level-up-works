import React from "react";
import useGetFetch from "../../../../hooks/useGetFetch";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { DashContentViewInnerContainer } from "../../../../styles/Dashboard/DashContainers";
import { useNavigate } from "react-router-dom";

const StudentProfiles = () => {
  const navigate = useNavigate();
  const { error, isPending, data: students } = useGetFetch(
    `http://localhost:4000/api/v1/student`
  );

  return (
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
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography variant="h4" component="h1">
            Student Profiles
          </Typography>
        </Box>
        <DashContentViewInnerContainer>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {students &&
            students.map((student) => (
              <Box key={student.student_id}>
                <Card
                  sx={{
                    width: "180px",
                    height: "172px",
                    borderRadius: "15px",
                    m: "2rem 1rem",
                  }}
                >
                  <CardActionArea
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: "1rem",
                    }}
                    onClick={() =>
                      navigate(`/student/profile/${student.student_id}`)
                    }
                  >
                    <Avatar
                      alt={student.name}
                      src={`/${student.profile_pic}`}
                      sx={{ width: 96, height: 96 }}
                    />

                    <CardContent>
                      <Typography
                        variant="p"
                        component="p"
                        sx={{
                          fontFamily: "Open Sans, sans-serif",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#707070 ",
                          textTransform: "uppercase",
                        }}
                      >
                        {student.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
        </DashContentViewInnerContainer>
      </Container>
    </Box>
  );
};
export default StudentProfiles;
