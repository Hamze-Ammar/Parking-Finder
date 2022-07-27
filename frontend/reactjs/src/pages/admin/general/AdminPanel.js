import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import { createUseStyles } from "react-jss";
import PendingRequests from "../pendingRequests/PendingRequests";
import { Colors } from "../../../constant/color";
import { AuthContext } from "../../../store/AuthContext";
import { AdminPanelContext } from "../../../store/AdminPanelContext";
import ComingSoon from "./ComingSoon";
import { getPendingRequests } from "../pendingRequests/pendingRequestsController";
import AllParkings from "../allParkings/AllParkings";
import OverView from "../overview/OverView";

function AdminPanel() {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);
  const AdminCtx = useContext(AdminPanelContext);
  const navigate = useNavigate();
  const [route, setRoute] = useState("Overview");

  useEffect(() => {
    if (!AuthCtx.token) {
      navigate("/");
    }
  }, [AuthCtx.token]);

  useEffect(() => {
    AdminCtx.fetchPendingRequests();
  });

  const handleNavigation = (route) => {
    // console.log("route ", route);
    if (route === "Requests") {
      setRoute(<PendingRequests />);
    } else if (route === "Parkings") {
      setRoute(<AllParkings />);
    } else if (route === "Overview") {
      setRoute(<OverView />);
    } else {
      setRoute(<ComingSoon />);
    }
  };

  return (
    <div className={classes.container}>
      <Dashboard onClick={handleNavigation} />
      <div className={classes.rightSide}>
        <NavBar />
        <div className={classes.display}>{route}</div>
      </div>
    </div>
  );
}

export default AdminPanel;

const useStyles = createUseStyles({
  container: {
    display: "flex",
    backgroundColor: "gray",
  },
  rightSide: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  display: {
    border: "1px solid",
    borderColor: Colors.background500,
    height: "100%",
    backgroundColor: Colors.background200,
    padding: "15px",
  },
});
