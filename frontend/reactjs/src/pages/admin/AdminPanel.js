import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import { createUseStyles } from "react-jss";
import PendingRequests from "./pendingRequests/PendingRequests";
import { Colors } from "../../constant/color";
import { AuthContext } from "../../store/AuthContext";
import ComingSoon from "./ComingSoon";
import { getPendingRequests } from "./pendingRequests/pendingRequestsController";

function AdminPanel() {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [route, setRoute] = useState();
  const [numberOfRequests, setNumberOfRequests] = useState(0);
  const [pendingReq, setPendingReq ] = useState(0)

  useEffect(() => {
    if (!AuthCtx.token) {
      navigate("/");
    }
    const fetchRequests = async () => {
        let res = await getPendingRequests(AuthCtx.token);
        setPendingReq(res);
        setNumberOfRequests(res.length);
      };
    fetchRequests();
  }, [AuthCtx.token]);


  const handleNavigation = (route) => {
    console.log("route ", route);
    if (route === "Requests") {
      setRoute(<PendingRequests pendingReq={pendingReq} setNumberOfRequests={setNumberOfRequests} />);
    } else {
      setRoute(<ComingSoon />);
    }
  };

  return (
    <div className={classes.container}>
      <Dashboard
        onClick={handleNavigation}
        numberOfRequests={numberOfRequests}
      />
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
