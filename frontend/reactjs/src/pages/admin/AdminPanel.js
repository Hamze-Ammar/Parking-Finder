import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import { createUseStyles } from "react-jss";
import PendingRequests from "./pendingRequests/PendingRequests";
import { Colors } from "../../constant/color";
import { AuthContext } from "../../store/AuthContext";
import { AdminPanelContext } from "../../store/AdminPanelContext";
import ComingSoon from "./ComingSoon";
import { getPendingRequests } from "./pendingRequests/pendingRequestsController";

function AdminPanel() {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);
  const AdminCtx = useContext(AdminPanelContext);
  const navigate = useNavigate();
  const [route, setRoute] = useState();
  const [pendingReq, setPendingReq] = useState(0);

  // check if there are pending requests to alert
  // a notification in Dashboard
  // using AdminPanelContext
  useEffect(() => {
    if (!AuthCtx.token) {
      navigate("/");
    }
    AdminCtx.fetchPendingRequests();
  }, [AuthCtx.token]);

  useEffect(() => {
    let numOfRequests = AdminCtx?.pendingRequests;
    if (numOfRequests || numOfRequests === 0) {
      setPendingReq(numOfRequests);
    }
  }, [AdminCtx.pendingRequests]);

  const handleNavigation = (route) => {
    console.log("route ", route);
    if (route === "Requests") {
      setRoute(<PendingRequests />);
    } else {
      setRoute(<ComingSoon />);
    }
  };

  return (
    <div className={classes.container}>
      <Dashboard onClick={handleNavigation} pendingReq={pendingReq} />
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
