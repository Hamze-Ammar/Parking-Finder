import { Alert } from "react-native";
import { URL } from "../../constants/IP_address";

export const loginUser = async (credentials) => {

  const handleResponse = (data) => {
    if (data["email"]) {
      if (data["email"][0]) {
        Alert.alert(data["email"][0]);
        return null;
      }
    }
    if (data.error) {
      if (data.error === "Unauthorized") {
        Alert.alert("Invalid credentials", "Wrong email or password!");
        return null;
      }
    }
    if (data.access_token) {
      let token = data.access_token;
      return token;
    }
  };

  try {
    const res = await fetch(`${URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    return handleResponse(data);
  } catch (err) {
    console.log(err);
  }
};

export function validateInput(credentials) {
  let { email, password } = credentials;

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

