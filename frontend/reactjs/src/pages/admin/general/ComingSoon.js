import React from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../constant/color";

const ComingSoon = () => {
  const classes = useStyles();
  return <div className={classes.container}>&lt;Coming Soon/&gt;</div>;
};

export default ComingSoon;

const useStyles = createUseStyles({
  container: {
    color: Colors.secondary500,
    fontFamily: "Montserrat",
    fontSize: "25px",
    fontWeight: "700",

    marginTop: "300px",
    textAlign: "center",
  },
});
