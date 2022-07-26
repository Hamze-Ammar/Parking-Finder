import React from "react";
import DashboardItem from "./DashboardItem";
import { createUseStyles } from "react-jss";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <DashboardItem text="Dashboard" />
      <DashboardItem text="Users" />
      <DashboardItem text="Analytics" />
      <DashboardItem text="Management" />
      <DashboardItem text="Statistics" />
      <DashboardItem text="Parkings" />
      <DashboardItem text="Overview" />
      <DashboardItem text="Requests" />
      <DashboardItem text="Reviews" />
    </div>
  );
};

export default Dashboard;

const useStyles = createUseStyles({
  container: {
    width: "300px",
    minHeight: "84vh",
    backgroundColor: "lightseagreen",
  },
});
