import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function NativePickers({ name, title, setInput }) {
  return (
    <Stack
      component="form"
      noValidate
      spacing={3}
      sx={{ width: "100%", height: "100%" }}
    >
      <TextField
        name={name}
        onChange={(e) => setInput(e)}
        id="time"
        label={title}
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: "100%", height: "100%" }}
        required
      />
    </Stack>
  );
}
