import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput({
  title,
  setInput,
  type,
  disabled,
  userInput,
  inputProps,
  name,
}) {
  function handleInput(e) {
    e.preventDefault();
    if (inputProps) {
      if (e.target.value > 150) {
        e.target.value = 150;
      }
      setInput(e);
    } else {
      setInput(e);
    }
  }
  
  

  return (
    <Box
      component="form"
      style={{ width: "100%", height: "100%" }}
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
        name={name}
      />
    </Box>
  );
}
