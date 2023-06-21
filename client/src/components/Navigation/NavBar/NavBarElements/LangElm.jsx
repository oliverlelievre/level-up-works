import { Box, styled, Link, Typography } from "@mui/material";
import React from "react";
import NZFlag from "../../../../assets/NavBar/NZFlag.png";
import MaoriFlag from "../../../../assets/NavBar/MaoriFlag.png";

const LangBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "0.65rem",
  marginTop: "0.5rem",
  marginBottom: "0.2rem",
  textAlign: "center",

  color: "white",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    color: "#707070",
    fontWeight: "bold",
  },
}));
const LangBoxImage = styled("img")({
  width: "auto",
  height: "100%",
  maxHeight: "0.75rem",
  objectFit: "contain",
  alignItems: "center",
  "&:hover": {
    paddingTop: "0.25rem",
  },
});

const LangElm = () => {
  return (
    <LangBox>
      <Typography
        sx={{
          fontSize: { xs: "0.45rem", md: "0.75rem" },
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Lang
      </Typography>
      <Box>
        <Link href="/" sx={{}}>
          <LangBoxImage
            src={NZFlag}
            alt="NZ Flag"
            sx={{
              maxHeight: {
                xs: "0.45rem",
                md: "0.75rem",
              },
            }}
          />
        </Link>
      </Box>
      <Box>
        <Link href="/" sx={{}}>
          <LangBoxImage
            src={MaoriFlag}
            alt="NZ Flag"
            sx={{
              maxHeight: {
                xs: "0.45rem",
                md: "0.75rem",
              },
            }}
          />
        </Link>
      </Box>
    </LangBox>
  );
};

export default LangElm;
