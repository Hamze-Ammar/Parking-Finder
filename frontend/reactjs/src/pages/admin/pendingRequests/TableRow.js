import React, { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Colors } from "../../../constant/color";
import { createUseStyles } from "react-jss";
import { AuthContext } from "../../../store/AuthContext";
import { acceptRequest } from "./pendingRequestsController";
import { declineRequest } from "./pendingRequestsController";

const TableRow = ({ request, refreshTable }) => {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);

  const handleDelete = () => {
    declineRequest(AuthCtx.token, request.id);
    refreshTable(request.id)
  };

  const handleAccept = () => {
    acceptRequest(AuthCtx.token, request.id);
    refreshTable(request.id)
  };

  return (
    <tr key={request.id}>
      <td>{request.name}</td>
      <td>{request.total_slots}</td>
      <td>{request.city}</td>
      <td>{request.country}</td>
      <td>{request.opening_hr}</td>
      <td>{request.closing_hr}</td>
      <td>{request.owner_name}</td>
      <td>{request.owner_email}</td>
      <td>
        <ClearIcon
          onClick={handleDelete}
          className={[classes.icon, classes.decline]}
        />
        <CheckIcon
          onClick={handleAccept}
          className={[classes.icon, classes.accept]}
        />
      </td>
    </tr>
  );
};

export default TableRow;

const useStyles = createUseStyles({
  icon: {
    color: "#fff",
    marginLeft: "15px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
      color: Colors.secondary500,
    },
  },
  accept: {
    backgroundColor: Colors.primary500,
  },
  decline: {
    backgroundColor: Colors.error200,
  },
});
