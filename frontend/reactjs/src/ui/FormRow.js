import React from "react";
import { createUseStyles } from "react-jss";

const FormRow = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.row}>{children}</div>;
};

export default FormRow;

const useStyles = createUseStyles({
  row: {
    display: "flex",
    width: "100%",
    gap: "15px",
  },
});
