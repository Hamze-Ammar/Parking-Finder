import React from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../constant/color";

const FormTitle = ({ children }) => {
  const classes = useStyles();

  return <h1 className={classes.title}>{children}</h1>;
};

export default FormTitle;

const useStyles = createUseStyles({
  title: {
    fontFamily: "Montserrat",
    color: Colors.fontPrimary,
  },
});
