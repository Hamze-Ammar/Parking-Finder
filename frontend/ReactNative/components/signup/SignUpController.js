import { useState } from "react";
import { Alert } from "react-native";

const validateInput = (credentials) => {
  let { name, email, password, confirmPassword } = credentials;

  name = name.trim();
  email = email.trim();
  password = password.trim();

  const nameIsValid = name.length > 1;
  const emailIsValid = email.includes("@");
  const passwordIsValid = password.length > 6;
  const passwordsAreEqual = password === confirmPassword;

  if (!nameIsValid || !emailIsValid || !passwordIsValid || !passwordsAreEqual) {
    Alert.alert("Invalid input", "Please check your entered credentials.");
    return {
      name: !nameIsValid,
      email: !emailIsValid,
      password: !passwordIsValid,
      confirmPassword: !passwordIsValid || !passwordsAreEqual,
    };
  }
  return "valid";
};

export default validateInput;

const 
