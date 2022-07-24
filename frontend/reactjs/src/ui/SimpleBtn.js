import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Colors } from "../constant/color";

function SimpleBtn({ text }) {
  const classes = useStyles();
  return (
    <Link to="/login">
      <a className={classes.btn}>{text}</a>
    </Link>
  );
}

export default SimpleBtn;

const useStyles = createUseStyles({
  btn: {
    textDecoration: "none",
    textDecorationLine: "none",
    // width: "80px",
    color: Colors.primary500,
  },
});
