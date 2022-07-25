import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields({ title, setInput }) {
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box
      style={{ width: "100%" }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        label={title}
        multiline
        rows={4}
        sx={{ width: "100%", height: "100%" }}
        onChange={handleChange}
      />
    </Box>
  );
}
