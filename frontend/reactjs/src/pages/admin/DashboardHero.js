import React from "react";
import { createUseStyles } from "react-jss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Colors } from "../../constant/color";

const DashboardHero = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <DashboardIcon />
      {text}
    </div>
  );
};

export default DashboardHero;

const useStyles = createUseStyles({
  container: {
    height: "30px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "25px",
    fontSize: "18px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    gap: "5px",
    backgroundColor: Colors.background500,
    color: Colors.primary500,
  },
});
