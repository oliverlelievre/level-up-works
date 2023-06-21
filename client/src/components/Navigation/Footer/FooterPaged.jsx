import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const FooterHeaders = styled(Typography)(({ theme }) => ({
  variant: "h6",
  component: "h6",
  color: "#707070",
  textTransform: "uppercase",
  fontWeight: "bold",
  "&.LevelUp": {
    textTransform: "capitalize",
  },
}));

const FooterList = styled(List)(({ theme }) => ({
  color: "#707070",
  marginLeft: "-1rem",
}));

const FooterTypo = styled(Typography)(({ theme }) => ({
  variant: "p",
  component: "p",
  color: "#707070",
  fontFamily: "Open Sans, sans-serif",
  fontWeight: "regular",
  marginTop: "1rem",
  fontSize: { xs: "0.75rem", md: "0.82rem", lg: "1rem" },
}));

const FooterPaged = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#B2E4FA",
        minHeight: "25rem",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: "4rem 2rem", md: "4rem 4rem" },
            pt: "5rem",
            pb: "5rem",
            fontSize: { xs: "12px", md: "14px", lg: "16px" },
          }}
        >
          <Grid container spacing={{ xs: 1, md: 2 }} justifyContent="center">
            <Grid item xs={12} sm={4} md={2}>
              <FooterHeaders>Company</FooterHeaders>
              <FooterList>
                <ListItem>About Us</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Partners</ListItem>
              </FooterList>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <FooterHeaders>Courses</FooterHeaders>
              <FooterList>
                <ListItem>Register</ListItem>
                <ListItem>Login</ListItem>
                <ListItem>Projects</ListItem>
                <ListItem>Teachers</ListItem>
                <ListItem>Parents</ListItem>
                <ListItem>Resources</ListItem>
              </FooterList>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <FooterHeaders>Support</FooterHeaders>
              <FooterList>
                <ListItem>FAQs</ListItem>
                <ListItem>Helpdesk</ListItem>
                <ListItem>Contact Us</ListItem>
              </FooterList>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <FooterHeaders>Legal</FooterHeaders>
              <FooterList>
                <ListItem>Terms & Conditions</ListItem>
                <ListItem>Privacy Policy</ListItem>
              </FooterList>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FooterHeaders className="LevelUp">LevelUp Works</FooterHeaders>
              <FooterTypo>
                LevelUp Works is an Auckland-based enterprise dedicated to
                developing game-based learning software to help teachers in
                response to the New Zealand Digital Technologies & Hangarau
                Matihiko.
              </FooterTypo>
              <FooterTypo>alan@levelupworks.com</FooterTypo>
              <FooterTypo> (021) 668 185</FooterTypo>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterPaged;
