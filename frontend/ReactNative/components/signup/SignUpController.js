import { Alert } from "react-native";
import { URL } from "../../constants/backendSync";

const validateInput = (credentials) => {
  let { name, email, password, confirmPassword } = credentials;

  name = name.trim();
  email = email.trim();
  password = password.trim();

  const nameIsValid = name.length > 1;
  const emailIsValid = email.includes("@");
  const passwordIsValid = password.length > 5;
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

// Send Post request to server
export const RegisterNewUser = async (credentials) => {
  try {
    const res = await fetch(`${URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    return handleResponse(data);
  } catch (err) {
    console.log({ err });
  }
};

function handleResponse(data) {
  // console.log(data);
  if (data?.email) {
    Alert.alert("Invalid Email", "Email has already been taken");
    return;
  }
  if (data?.message) {
    Alert.alert("Success", "User successfully registered");
    return "success";
  }
}
