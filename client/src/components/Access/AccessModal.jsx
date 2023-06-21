import {
  Backdrop,
  CardMedia,
  Container,
  Divider,
  Fade,
  Grid,
  Modal as MuiModal,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import CloseImage from "../../assets/LoginSignup/esc.png";
import StudentForm from "./ModalElements/StudentForm";
import TeacherForm from "./ModalElements/TeacherForm";
import { ModalContext } from "../../contexts/ModalContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxHeight: "96%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #FFFFFF",
  boxShadow: "#00000029 0px 5px 15px",
  p: 4,
  overflow: "auto",
};
const AccessModal = () => {
  const { openModal, handleModalClose, accessType } = useContext(ModalContext);

  const [activeLink, setActiveLink] = useState(accessType);

  const handleTitleClick = (newLink) => {
    setActiveLink(activeLink === newLink ? newLink : newLink);
    // accessType = newLink;
  };

  useEffect(() => {
    if (accessType === "log-in") {
      setActiveLink("log-in");
    } else if (accessType === "sign-up") {
      setActiveLink("sign-up");
    }
  }, [accessType]);

  const modalLinks = ({ isActive, newLink }) => {
    return {
      borderBottom:
        isActive && activeLink === newLink
          ? newLink === "log-in"
            ? "4px solid #43C0F6"
            : "4px solid #F91C85"
          : "none",
      color: isActive ? "#707070" : "#A5A5A5",
    };
  };

  return (
    <MuiModal
      open={openModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModal}>
        <Container maxWidth="md" sx={style}>
          <CardMedia
            component="img"
            image={CloseImage}
            alt="Close Modal Image"
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              top: "30px",
              right: "30px",
              width: "30px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          <Grid container direction="row">
            <StudentForm
              modalLinks={modalLinks}
              activeLink={activeLink}
              handleTitleClick={handleTitleClick}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: "inherit", border: "1px solid #707070" }}
            />
            <TeacherForm
              modalLinks={modalLinks}
              activeLink={activeLink}
              handleTitleClick={handleTitleClick}
            />
          </Grid>
        </Container>
      </Fade>
    </MuiModal>
  );
};

export default AccessModal;
