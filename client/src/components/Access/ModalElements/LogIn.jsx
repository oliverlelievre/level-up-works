import { Box, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { LevelUpButtons } from "../../../styles/General/Buttons";
const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "300px",
  fontSize: "0.85rem",
  "& .MuiOutlinedInput-root": {
    border: "#A29F9F 0.2rem",
    borderRadius: "1.5rem",
  },
}));

const LogIn = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      <StyledTextField
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <StyledTextField
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        required
        value={formData.password}
        onChange={handleChange}
      />

      <LevelUpButtons
        variant="contained"
        className="secondary-btn"
        type="button"
        sx={{ margin: "2rem" }}
        onClick={(e) => handleLogin({ e, formData })}
      >
        LOG IN
      </LevelUpButtons>
    </Box>
  );
};

export default LogIn;
