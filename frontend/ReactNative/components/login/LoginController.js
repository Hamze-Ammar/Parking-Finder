import { Alert } from "react-native";

const LoginUser = () => {
  return;
};

export default LoginUser;

export function validateInput(credentials) {
  let { email, password } = credentials;

  console.log({ email });
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
