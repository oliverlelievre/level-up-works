import { styled, TextField } from "@mui/material";
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

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, password, confirmPassword);
  };

  return (
    <form
      onSubmit={handleSubmit}
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
        label="Full Name"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <StyledTextField
        label="Email"
        type="email"
        variant="outlined"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledTextField
        label="Password"
        type="password"
        variant="outlined"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <StyledTextField
        label="Confirm Password"
        variant="outlined"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div>
        <LevelUpButtons
          variant="contained"
          className="secondary-btn"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          SIGN UP
        </LevelUpButtons>
      </div>
    </form>
  );
};

export default SignUp;
