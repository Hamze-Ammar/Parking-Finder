import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function NativePickers({ title, setInput }) {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        onChange={setInput}
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
        sx={{ width: "25ch" }}
      />
    </Stack>
  );
}
