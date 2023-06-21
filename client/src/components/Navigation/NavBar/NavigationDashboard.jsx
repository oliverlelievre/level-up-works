import { Box, Container } from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import LogoElm from "./NavBarElements/LogoElm";
import LangElm from "./NavBarElements/LangElm";
import TeacherNavBar from "./NavigationDashboardElements/TeacherNavBar";
import StudentNavBar from "./NavigationDashboardElements/StudentNavBar";
import {
  DashboardNav,
  StyledToolbar,
  NavBox,
  LoginPanel,
} from "../../../styles/Dashboard/navBar";

const NavigationDashboard = forwardRef(function NavigationDashboard(
  navProps,
  appBarRef
) {
  const [roleType, setRoleType] = useState(navProps.role);

  useEffect(() => {
    setRoleType(navProps.role);
  }, []);

  let menuComponent;
  switch (roleType) {
    case "teacher":
      menuComponent = <TeacherNavBar />;
      break;
    case "student":
      menuComponent = <StudentNavBar />;
      break;
    default:
      menuComponent = null;
  }
  return (
    <DashboardNav position="fixed" ref={appBarRef}>
      <Container maxWidth="xl">
        <StyledToolbar>
          <LogoElm />
          <NavBox>
            {menuComponent}
            <LoginPanel>
              <LangElm />
              <NavBox></NavBox>
            </LoginPanel>
          </NavBox>
        </StyledToolbar>
      </Container>
    </DashboardNav>
  );
});

export default NavigationDashboard;
