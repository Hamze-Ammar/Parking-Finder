import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton({ returnBack }) {
  return (
    <Button
      onClick={returnBack}
      variant="outlined"
      startIcon={<ArrowBackIcon />}
    >
      Back
    </Button>
  );
}
