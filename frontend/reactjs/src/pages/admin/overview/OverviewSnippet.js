import React from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../constant/color";

const OverviewSnippet = ({ icon, title, info }) => {
  const classes = useStyles();

  return (
    <div className={classes.flexRow}>
      <h1>{icon}</h1>

      <div>
        <h5>{title}</h5>
        <h2>{info}</h2>
      </div>
    </div>
  );
};

export default OverviewSnippet;

const useStyles = createUseStyles({
  flexRow: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    color: "#555",
  },
});
