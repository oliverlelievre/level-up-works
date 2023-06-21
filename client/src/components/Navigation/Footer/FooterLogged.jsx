import { Box, Typography } from "@mui/material";
import React from "react";
import { CopyrightYear } from "../../Utils/CopyrightYear";

const FooterLogged = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "2rem 0rem",
        color: "#707070",
        borderTop: "1px solid #707070",
      }}
    >
      <Typography variant="p" component="p" sx={{}}>
        &copy; LevelUp Works <CopyrightYear />
      </Typography>
    </Box>
  );
};

export default FooterLogged;
