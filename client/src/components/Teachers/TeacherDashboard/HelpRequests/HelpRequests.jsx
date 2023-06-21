import React, { useEffect, useState } from "react";
import useGetFetch from "../../../../hooks/useGetFetch";
import moment from "moment";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Container,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { DashContentViewInnerContainer } from "../../../../styles/Dashboard/DashContainers";
import { DoneRounded, ReplyRounded } from "@mui/icons-material";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 28,
  height: 28,
  backgroundColor: "#fff",
  color: "#fff",

  "input:hover ~ &": {
    backgroundColor: "#30404d",
  },
}));

const HelpRequests = () => {
  const [requestData, setRequestData] = useState([]);

  const { error, isPending, data: helpRequests } = useGetFetch(
    `http://localhost:4000/api/v1/help-requests`
  );

  useEffect(() => {
    if (helpRequests && helpRequests.length >= 0) {
      setRequestData(helpRequests);
    }
  }, [helpRequests]);

  const formatDate = (dateTimeString) => {
    const date = moment(dateTimeString).utc();
    const dayOfWeek = date.format("ddd").toUpperCase();
    const dayOfMonth = date.format("DD");
    const month = date.format("MMM");
    const year = date.format("YYYY");
    const hours = date.format("hh");
    const minutes = date.format("mm");
    const ampm = date.format("A");

    const fullDate = `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
    const fullTime = `${hours}:${minutes} ${ampm}`;

    return [fullDate, fullTime];
  };

  return (
    <Box
      sx={{
        p: 2,
        pb: 6,
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
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography
            variant="h1"
            component="h6"
            sx={{
              textAlign: "left",
              textTransform: "uppercase",
              fontFamily: "Nunito, sans-serif",
              fontSize: "24px",
              fontWeight: 900,
              mb: "1rem",
            }}
          >
            Help Requests
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justtifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                textAlign: "right",
                textTransform: "uppercase",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#6C6C6C",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <ReplyRounded />
              <Typography variant="body1" sx={{ ml: "auto" }}>
                Reply
              </Typography>
            </IconButton>
            <IconButton
              sx={{
                textAlign: "right",
                textTransform: "uppercase",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#6C6C6C",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <DoneRounded />
              <Typography variant="body1" sx={{ ml: "auto" }}>
                Mark as Done
              </Typography>
            </IconButton>
          </Box>
        </Box>
        <DashContentViewInnerContainer>
          <Grid
            container
            spacing={2}
            direction="column"
            sx={{ p: "2rem", pr: "3rem" }}
          >
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {requestData &&
              requestData.map((request) => (
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  key={request.request_id}
                >
                  <Grid item xs={1}>
                    <Checkbox
                      edge="start"
                      disableRipple
                      inputProps={{ "aria-labelledby": request.request_id }}
                      icon={<BpIcon />}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Card
                      sx={{
                        display: "flex",
                        minWidth: "860px",
                        width: "100%",
                        height: "75px",
                        borderRadius: "15px",
                        mx: "2rem",
                        my: "1rem",
                        px: "2rem",
                        boxShadow: "0px 4px 4px #00000029",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          src={`/${request.profile_pic}`}
                          alt={request.date_created}
                          sx={{ width: 60, height: 60 }}
                        />
                        <Typography
                          variant="p"
                          component="p"
                          sx={{
                            fontFamily: "Open Sans, sans-serif",
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#707070",
                            ml: "2rem",
                            "& .first-name": {
                              textTransform: "uppercase",
                            },
                          }}
                        >
                          <span className="first-name">
                            {request.first_name}
                          </span>{" "}
                          needs help with{" "}
                          {request.gender === "male" ? "his" : "her"} project.
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#707070",
                          textAlign: "right",
                        }}
                      >
                        <Box>{formatDate(request.date_created)[0]}</Box>
                        <Box>{formatDate(request.date_created)[1]}</Box>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </DashContentViewInnerContainer>
      </Container>
    </Box>
  );
};
export default HelpRequests;
