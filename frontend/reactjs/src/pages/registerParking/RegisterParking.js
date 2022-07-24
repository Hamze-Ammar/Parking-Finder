import React from "react";
import { createUseStyles } from "react-jss";
import RegisterForm from "../../components/formParking/RegisterForm";

const RegisterParking = () => {
  const classes = useStyles();

  return (
    <div style={classes.container}>
      <RegisterForm />
    </div>
  );
};

export default RegisterParking;

const useStyles = createUseStyles({});
