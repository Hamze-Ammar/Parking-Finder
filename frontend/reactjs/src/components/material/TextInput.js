import * as React from "react";
// import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput({ title, setInput, type }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e) => setInput(e.target.value)}
        id="outlined-basic"
        label={title}
        variant="outlined"
        type={type && type}
        required
      />
    </Box>
  );
}
