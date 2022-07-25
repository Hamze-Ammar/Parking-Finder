import React from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../constant/color";

const FormContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default FormContainer;

const useStyles = createUseStyles({
  container: {
    border: "2px solid",
    borderColor: Colors.primary500,
    width: "600px",
    height: "600px",
    backgroundColor: Colors.background200,
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
});
