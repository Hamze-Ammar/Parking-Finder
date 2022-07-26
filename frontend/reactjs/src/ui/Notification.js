import React from "react";
import { createUseStyles } from "react-jss";

const Notification = ({ text }) => {
  const classes = useStyles();

  return <span className={classes.alert}>{text}</span>;
};

export default Notification;
const useStyles = createUseStyles({
  alert: {
    backgroundColor: "red",
    padding: "3px",
    width: "25px",
    borderRadius: "13px",
    textAlign: "center",
    color: "#fff",
  },
});
