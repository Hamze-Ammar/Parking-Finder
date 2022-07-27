import { borderTopColor } from "@mui/system";
import React from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../constant/color";
import { FiUsers } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import { RiParkingLine } from "react-icons/ri";
import { FaRegFlag } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

import OverviewSnippet from "./OverviewSnippet";

const OverViewHeader = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div>Overview</div>
        {/* <hr /> */}
        <div className={classes.infoContainer}>
          <OverviewSnippet icon={<FiUsers />} title="Users" info="239" />
          <OverviewSnippet
            icon={<RiParkingLine />}
            title="Parkings"
            info="39"
          />
          <OverviewSnippet icon={<AiOutlineCar />} title="Spots" info="439" />
          <OverviewSnippet icon={<FaRegFlag />} title="Countries" info="4" />
          <OverviewSnippet icon={<FaCity />} title="Citie" info="14" />
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
    padding: "35px",
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
