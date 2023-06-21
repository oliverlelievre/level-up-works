import { Box, Typography, Container } from "@mui/material";
import React, { forwardRef } from "react";
import { CopyrightYear } from "../../Utils/CopyrightYear";
import { DashboardFooter } from "../../../styles/Dashboard/DashContainers";

const FooterDashboard = forwardRef(function FooterDashboard(
  footerProps,
  footerRef
) {
  return (
    <DashboardFooter ref={footerRef}>
      <Container maxWidth="lg">
        <Box sx={{}}>
          <Typography variant="p" component="p">
            &copy; LevelUp Works <CopyrightYear />
          </Typography>
        </Box>
      </Container>
    </DashboardFooter>
  );
});

export default FooterDashboard;
