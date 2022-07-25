import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import RegisterForm from "../../components/formParking/RegisterForm";
import MyMap from "../../components/formParking/Map";

const RegisterParking = () => {
  const classes = useStyles();
  const [pickedLocation, setPickedLocation] = useState();

  return (
    <div className={classes.container}>
      <RegisterForm pickedLocation={pickedLocation}/>
      <MyMap setPickedLocation={setPickedLocation}  />
    </div>
  );
};

export default RegisterParking;

const useStyles = createUseStyles({
  container: {
    height: "100vh",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    backgroundColor: "red",
  },
});
