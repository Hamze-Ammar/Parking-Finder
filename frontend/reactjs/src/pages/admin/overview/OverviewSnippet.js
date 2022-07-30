import React from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../constant/color";

const OverviewSnippet = ({ icon, title, info }) => {
  const classes = useStyles();

  return (
    <div className={classes.flexRow}>
      <h2>{icon}</h2>

      <div>
        <h6>{title}</h6>
        <h3>{info}</h3>
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
