import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { AuthContext } from "../../../store/AuthContext";
import { getAllParkings } from "./allParkingsController";
import ParkingsTableRow from "./ParkingsTableRow";
import SnackBar from "../../../ui/SnackBar";

const AllParkings = () => {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const [allParkings, setAllParkings] = useState();
  //   console.log(allParkings);

  useEffect(() => {
    const fetchRequests = async () => {
      let res = await getAllParkings(AuthCtx.token);
      setAllParkings(res);
    };
    fetchRequests();
  }, [AuthCtx.token]);

  const refreshTable = (id) => {
    setAllParkings(allParkings.filter((request) => request.id !== id));
  };

  return (
    <div className={classes.tableContainer}>
      <SnackBar
        severity="success"
        msg={"Parking has been permanently removed"}
        open={open}
        setOpen={setOpen}
      />
      <h1>All Registered Parkings</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Parking name</th>
            <th>Total Slots</th>
            <th>Active Slots</th>
            <th>City</th>
            <th>Country</th>
            <th>Owner name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allParkings &&
            allParkings.map((parking) => {
              return (
                <ParkingsTableRow
                  key={parking.id}
                  parking={parking}
                  refreshTable={refreshTable}
                  setOpen={setOpen}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AllParkings;

const useStyles = createUseStyles({
  tableContainer: {
    fontSize: "16px",
    fontFamily: "Montserrat",
  },
});
