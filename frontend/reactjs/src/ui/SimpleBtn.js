import React from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../constant/color";

function SimpleBtn({ text, onClick }) {
  const classes = useStyles();
  return (
    <button onClick={onClick} className={classes.btn}>
      {text}
    </button>
  );
}

export default SimpleBtn;

const useStyles = createUseStyles({
  btn: {
    color: Colors.background200,
    padding: "15px 25px",
    fontSize: "20px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    backgroundColor: Colors.primary500,
    border: "none",
    borderRadius: "10px",
    "&:hover": {
      opacity: 0.7,
    },
  },
});
