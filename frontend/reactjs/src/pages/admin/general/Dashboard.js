import React from "react";
import DashboardItem from "./DashboardItem";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../constant/color";
import DashboardHero from "./DashboardHero";
import Logo from "../../../ui/Logo";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

const Dashboard = ({ onClick }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Logo />
        <br />
        <hr />
        <DashboardHero text="Dashboard" />
        <DashboardItem
          icon={<FullscreenIcon />}
          text="Overview"
          onClick={onClick}
        />
        <DashboardItem
          icon={<PeopleAltIcon />}
          text="Users"
          onClick={onClick}
        />
        <DashboardItem
          icon={<QueryStatsIcon />}
          text="Analytics"
          onClick={onClick}
        />
        <DashboardItem
          icon={<ControlCameraIcon />}
          text="Management"
          onClick={onClick}
        />
        <DashboardItem
          icon={<DonutSmallIcon />}
          text="Statistics"
          onClick={onClick}
        />
        <DashboardItem
          icon={<LocalParkingIcon />}
          text="Parkings"
          onClick={onClick}
        />
        <DashboardItem
          icon={<MarkChatUnreadIcon />}
          text="Requests"
          onClick={onClick}
          showPendingReq={true}
        />
        <DashboardItem
          icon={<InsertCommentIcon />}
          text="Reviews"
          onClick={onClick}
        />
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
