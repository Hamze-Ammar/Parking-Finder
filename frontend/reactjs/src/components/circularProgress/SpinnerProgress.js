import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { createUseStyles } from "react-jss";

const SpinnerProgress = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    </div>
  );
};

export default SpinnerProgress;

const useStyles = createUseStyles({
  outerContainer: {},
  container: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100vw",
    height: "100vh",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1",
    position: "fixed",
    top: "0",
  },
});
