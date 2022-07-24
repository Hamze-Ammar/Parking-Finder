import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Colors } from "../constant/color";

function SimpleBtn({ text }) {
  const classes = useStyles();
  return (
    <Link to="/login">
      <button className={classes.btn}>{text}</button>
    </Link>
  );
}

export default SimpleBtn;

const useStyles = createUseStyles({
  btn: {
    // textDecoration: "none",
    // textDecorationLine: "none",
    // width: "80px",
    color: Colors.background200,
    padding: "15px 25px",
    fontSize: "20px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    // backgroundColor: Colors.background200,
    backgroundColor: Colors.primary500,
    border: "none",
    borderRadius: "10px",
    "&:hover": {
      opacity: 0.7,
    },
  },
});
