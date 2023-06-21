import { Box, styled } from "@mui/material";

const SectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  padding: theme.spacing(4, 0),
}));

export { SectionBox };
