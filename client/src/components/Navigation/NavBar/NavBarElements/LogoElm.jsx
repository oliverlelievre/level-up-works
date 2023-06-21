import { Box, styled, Link } from "@mui/material";
import React, { useContext } from "react";
import LevelUpWorksWhite from "../../../../assets/NavBar/LevelUpWorksWhite.png";
import LevelUpWorksBlue from "../../../../assets/NavBar/LevelUpWorks-blue.png";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";

const Logo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  height: "auto",
  width: "11rem",
  objectFit: "cover",
  "& Link": {
    textDecoration: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    height: "auto",
    flexGrow: 2,
  },
}));

const LogoImage = styled("img")({
  width: "100%",
  maxWidth: "11rem",
  height: "auto",
  objectFit: "contain",
});

const LogoElm = () => {
  const { role } = useContext(AuthContext);
  const location = useLocation();

  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isWildPath = location.pathname === "*";
  const dashLogoPath =
    role === "teacher"
      ? "/dashboard/teacher/progress-tracker"
      : "/dashboard/student/learning-objectives";
  return (
    <Logo>
      {isDashboardPage ? (
        <Link href={dashLogoPath}>
          <LogoImage src={LevelUpWorksBlue} alt="Level Up Works Logo Blue" />
        </Link>
      ) : isWildPath ? (
        <Link href={dashLogoPath}>
          <LogoImage src={LevelUpWorksBlue} alt="Level Up Works Logo Blue" />
        </Link>
      ) : (
        <Link href="/">
          <LogoImage src={LevelUpWorksWhite} alt="Level Up Works Logo White" />
        </Link>
      )}
    </Logo>
  );
};

export default LogoElm;
