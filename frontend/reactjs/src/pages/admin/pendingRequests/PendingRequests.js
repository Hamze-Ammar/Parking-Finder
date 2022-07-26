import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { getPendingRequests } from "./pendingRequestsController";
import { AuthContext } from "../../../store/AuthContext";
import TableRow from "./TableRow";

const PendingRequests = ({ setNumberOfRequests, pendingReq }) => {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);

  const [pendingRequests, setPendingRequests] = useState();

  useEffect(() => {
    setPendingRequests(pendingReq);
  }, [pendingReq]);

  const refreshTable = (id) => {
    setPendingRequests(pendingRequests.filter((request) => request.id !== id));
    setNumberOfRequests(pendingRequests.length - 1);
  };

  return (
    <div className={classes.tableContainer}>
      <h1>Pending Requests</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Parking name</th>
            <th>Total Slots</th>
            <th>City</th>
            <th>Country</th>
            <th>Open at</th>
            <th>Close at</th>
            <th>Owner name</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pendingRequests &&
            pendingRequests.map((request) => {
              return <TableRow request={request} refreshTable={refreshTable} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PendingRequests;

const useStyles = createUseStyles({
  tableContainer: {
    fontSize: "14px",
    fontFamily: "Montserrat",
  },
});
