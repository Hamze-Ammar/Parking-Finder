import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../constant/color";
import { AuthContext } from "../../../store/AuthContext";
import { deleteParking } from "./allParkingsController";
import { AdminPanelContext } from "../../../store/AdminPanelContext";

const ParkingsTableRow = ({ parking, refreshTable, setOpen }) => {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);
  const AdminCtx = useContext(AdminPanelContext);

  let status;
  let statusColor;
  if (parking?.is_approved == 1) {
    status = "Active";
    statusColor = classes.accepted;
  } else if (parking?.is_approved == -1) {
    status = "Declined";
    statusColor = classes.declined;
  } else {
    status = "Pending";
    statusColor = classes.pending;
  }

  const handleDelete = async () => {
    deleteParking(AuthCtx.token, parking.id).then((response) => {
      setOpen(response);
    });
    if (parking.is_approved == 0) {
      AdminCtx.updatePendingRequests();
    }
    refreshTable(parking.id);
  };

  return (
    <>
      <tr>
        <td>{parking.id}</td>
        <td>{parking.name}</td>
        <td>{parking.total_slots}</td>
        <td>{parking.num_of_active_slots}</td>
        <td>{parking.city_name}</td>
        <td>{parking.country_name}</td>
        <td>{parking.user_name}</td>
        <td>{parking.user.email}</td>
        <td className={statusColor}>{status}</td>
      </tr>
    </>
  );
};

export default ParkingsTableRow;

const useStyles = createUseStyles({
  icon: {
    marginLeft: "15px",
    cursor: "pointer",
    borderRadius: "10px",
    "&:hover": {
      color: "rgba(255,255,255,0.8)",
      backgroundColor: Colors.error200,
    },
  },
  decline: {
    color: Colors.error500,
  },
  accepted: {
    backgroundColor: Colors.accepted,
    color: Colors.fontSecondary,
  },
  declined: {
    backgroundColor: Colors.declined,
    color: Colors.fontSecondary,
  },
  pending: {
    backgroundColor: Colors.pending,
    color: Colors.fontSecondary,
  },
});
