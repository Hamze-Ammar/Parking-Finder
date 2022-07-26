import React from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import { createUseStyles } from "react-jss";

function AdminPanel() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default AdminPanel;

const useStyles = createUseStyles({
  container: {
    // minHeight: "100vh",
    backgroundColor: "gray",
  },
});
