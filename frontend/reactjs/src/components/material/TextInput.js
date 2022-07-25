import * as React from "react";
// import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput({
  title,
  setInput,
  type,
  disabled,
  userInput,
  inputProps,
}) {
  function handleInput(e) {
    e.preventDefault();
    if (inputProps) {
      setInput(parseInt(e.target.value));
    } else {
      setInput(e.target.value);
    }
  }
  return (
    <Box
      // fullWidth
      component="form"
      style={{ width: "100%", height: "100%" }}
      // sx={{
      //   "& > :not(style)": { m: 1, width: "100%", height: "100%" },
      // }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        onChange={handleInput}
        id="outlined-basic"
        label={title}
        variant="outlined"
        type={type && type}
        required
        disabled={disabled}
        style={{ width: "100%", height: "100%" }}
        value={userInput}
        inputProps={inputProps}
      />
    </Box>
  );
}
