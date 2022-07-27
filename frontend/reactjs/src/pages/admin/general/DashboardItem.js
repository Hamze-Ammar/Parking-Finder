import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { AdminPanelContext } from "../../../store/AdminPanelContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import { Colors } from "../../../constant/color";
import Notification from "../../../ui/Notification";

const DashboardItem = ({ text, onClick, showPendingReq }) => {
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

  let icon;
  if (text === "Dashboard") {
    icon = <DashboardIcon />;
  } else if (text === "Users") {
    icon = <PeopleAltIcon />;
  } else if (text === "Analytics") {
    icon = <QueryStatsIcon />;
  } else if (text === "Management") {
    icon = <ControlCameraIcon />;
  } else if (text === "Statistics") {
    icon = <DonutSmallIcon />;
  } else if (text === "Parkings") {
    icon = <LocalParkingIcon />;
  } else if (text === "Overview") {
    icon = <FullscreenIcon />;
  } else if (text === "Requests") {
    icon = <MarkChatUnreadIcon />;
  } else if (text === "Reviews") {
    icon = <InsertCommentIcon />;
  }

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
