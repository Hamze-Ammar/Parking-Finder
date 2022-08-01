import React, { useContext, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../constant/color";
import { FiUsers } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import { RiParkingLine } from "react-icons/ri";
import { FaRegFlag } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import OverviewSnippet from "./OverviewSnippet";
import { AuthContext } from "../../../store/AuthContext";
import { getOverviewHeaderInfo } from "./overviewController";

const OverViewHeader = () => {
  const authCtx = useContext(AuthContext);
  // authCtx.token
  const classes = useStyles();
  const [info, setInfo] = useState({});
  console.log(info);
  useEffect(() => {
    const fetchInfo = async (token) => {
      setInfo(await getOverviewHeaderInfo(token));
    };
    fetchInfo(authCtx.token);
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div>Overview</div>
        <div className={classes.infoContainer}>
          <OverviewSnippet
            icon={<FiUsers />}
            title="Users"
            info={info?.num_of_users}
          />
          <OverviewSnippet
            icon={<RiParkingLine />}
            title="Parkings"
            info={info?.num_of_parkings}
          />
          <OverviewSnippet
            icon={<AiOutlineCar />}
            title="Spots"
            info={info?.num_of_slots}
          />
          <OverviewSnippet
            icon={<FaRegFlag />}
            title="Countries"
            info={info?.num_of_countries}
          />
          <OverviewSnippet
            icon={<FaCity />}
            title="Cities"
            info={info?.num_of_cities}
          />
        </div>
      </div>
    </>
  );
};

export default OverViewHeader;

const useStyles = createUseStyles({
  container: {
    fontFamily: "Montserrat",
    fontSize: "25px",
  },
  infoContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "space-evenly",
    padding: "25px",
    borderTop: {
      width: "3px",
      style: "solid",
      color: Colors.background500,
    },
    borderBottom: {
      width: "3px",
      style: "solid",
      color: Colors.background500,
    },
  },
  flexRow: {
    display: "flex",
  },
});
