import React from "react";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Star from "../../../../assets/Home/Star.png";

const ProgrammeDisplay = ({ selectedButton, programmes }) => {
  const selectedProgramme = programmes.find(
    (programme) => programme.btnName === selectedButton
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: "0.65rem",
        backgroundColor: "#EFEFF1",
        width: "100%",
        color: "#606060",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction={"column"}
          sx={{
            my: "2rem",
          }}
        >
          <Grid item id={selectedProgramme.btnName}>
            <Typography variant="h6" component="h6">
              {selectedProgramme.header}
            </Typography>
            <Typography variant="body1" component="p">
              {selectedProgramme.description}
            </Typography>
          </Grid>
          <Grid item xs container>
            {selectedProgramme.list.map((item) => (
              <Grid item key={item.listHeader}>
                <List key={item.listHeader}>
                  <ListItem>
                    <ListItemIcon>
                      <CardMedia
                        component="img"
                        image={Star}
                        alt={"alt"}
                        title="Star"
                        sx={{
                          objectFit: "contain",
                          width: 40,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="subtitle1" component="h6">
                        {item.listHeader}
                      </Typography>
                      <Typography variant="body1" component="p">
                        {item.listDescription}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgrammeDisplay;
