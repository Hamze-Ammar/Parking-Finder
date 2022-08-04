import React from "react";
import WeeklyChart from "./WeeklyChart";
import { createUseStyles } from "react-jss";

const Statistics = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.tableContainer}>
        <h1>Weekly Overview</h1>
        <div className={classes.chartContainer}>
          <WeeklyChart />
        </div>
      </div>
    </>
  );
};

export default Statistics;

const useStyles = createUseStyles({
  tableContainer: {
    fontSize: "14px",
    fontFamily: "Montserrat",
  },
  chartContainer: {
    marginTop: "40px",
  },
});
