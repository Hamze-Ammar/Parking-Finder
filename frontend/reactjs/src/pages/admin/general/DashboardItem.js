import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { AdminPanelContext } from "../../../store/AdminPanelContext";
import { Colors } from "../../../constant/color";
import Notification from "../../../ui/Notification";

const DashboardItem = ({ icon, text, onClick, showPendingReq }) => {
  const classes = useStyles();
  const AdminCtx = useContext(AdminPanelContext);
  const [pendingReq, setPendingReq] = useState(0);

  useEffect(() => {
    if (showPendingReq) {
      let numOfReq = AdminCtx.pendingRequests;
      if (numOfReq) {
        setPendingReq(numOfReq);
      }
    }
  }, [AdminCtx.pendingRequests]);


  return (
    <div className={classes.container} onClick={() => onClick(text)}>
      {icon}
      {text}
      {showPendingReq && <Notification text={pendingReq} />}
    </div>
  );
};

export default DashboardItem;

const useStyles = createUseStyles({
  container: {
    height: "30px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "25px",
    fontSize: "18px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    gap: "5px",
    "&:hover": {
      backgroundColor: Colors.background500,
      color: Colors.primary500,
    },
    cursor: "pointer",
    color: Colors.secondary500,
  },
});
