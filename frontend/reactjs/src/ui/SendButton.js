import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Colors } from "../constant/color";

export default function SendButton({ disableSave, handleSubmit }) {
  const handleClick = () => {
    handleSubmit();
  };
  return (
    <Button
      style={{ backgroundColor: Colors.primary500 }}
      disabled={disableSave}
      variant="contained"
      endIcon={<SendIcon />}
      onClick={handleClick}
    >
      Save
    </Button>
  );
}
