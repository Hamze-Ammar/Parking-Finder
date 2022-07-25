import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields({ title, setInput }) {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      style={{ width: "100%" }}
      component="form"
      // sx={{
      //   "& .MuiTextField-root": { m: 1, width: "100%" },
      // }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        label={title}
        multiline
        rows={4}
        sx={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
}
