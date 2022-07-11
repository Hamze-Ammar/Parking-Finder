import React from "react";

const LoginController = () => {
  return;
};

export default LoginController;

export function validateInput(email, password) {
  email = email.trim();
  password = password.trim();

  const emailIsValid = email.includes("@");
  const passwordIsValid = password.length > 5;

  if (!emailIsValid || !passwordIsValid) {
    Alert.alert("Invalid input", "Please check your entered credentials.");
    return {
      email: !emailIsValid,
      password: !passwordIsValid,
    };
  }
  return "valid";
}
