import React from "react";
import DashboardItem from "./DashboardItem";
import { createUseStyles } from "react-jss";
import { Colors } from "../../constant/color";
import DashboardHero from "./DashboardHero";
import Logo from "../../ui/Logo";

const Dashboard = ({ onClick, numberOfRequests }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Logo />
        <br />
        <hr />
        <DashboardHero text="Dashboard" />
        <DashboardItem text="Users" onClick={onClick} />
        <DashboardItem text="Analytics" onClick={onClick} />
        <DashboardItem text="Management" onClick={onClick} />
        <DashboardItem text="Statistics" onClick={onClick} />
        <DashboardItem text="Parkings" onClick={onClick} />
        <DashboardItem text="Overview" onClick={onClick} />
        <DashboardItem
          text="Requests"
          onClick={onClick}
          notification={numberOfRequests}
        />
        <DashboardItem text="Reviews" onClick={onClick} />
      </div>
    </>
  );
};

export default Dashboard;

const useStyles = createUseStyles({
  container: {
    padding: "5px",
    width: "320px",
    minHeight: "100vh",
    background: `linear-gradient(to right, ${Colors.background500} 0%, ${Colors.background200} 100%)`,
  },
});
