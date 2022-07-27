import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { getPendingRequests } from "./pendingRequestsController";
import { AuthContext } from "../../../store/AuthContext";
import { AdminPanelContext } from "../../../store/AdminPanelContext";
import TableRow from "./TableRow";

const PendingRequests = () => {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);
  const AdminCtx = useContext(AdminPanelContext);

  const [pendingRequests, setPendingRequests] = useState();

  useEffect(() => {
    const fetchRequests = async () => {
      let res = await getPendingRequests(AuthCtx.token);
      setPendingRequests(res);
    };
    fetchRequests();
  }, [AuthCtx.token]);



  const refreshTable = (id) => {
    setPendingRequests(pendingRequests.filter((request) => request.id !== id));
    AdminCtx.updatePendingRequests();
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
              return (
                <TableRow
                  key={request.id}
                  request={request}
                  refreshTable={refreshTable}
                />
              );
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
