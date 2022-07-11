import { Alert } from "react-native";

const LoginUser = async (credentials) => {
  try {
    const res = await fetch("http://192.168.1.95:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    // console.log(data);
    handleResponse(data);
  } catch (err) {
    console.log(err);
  }
};
export default LoginUser;

const handleResponse = (data) => {
  //   console.log(data.error);
  if (data.error) {
    if (data.error === "Unauthorized") {
      Alert.alert("Invalid credentials", "Wrong email or password!");
    }
  }
  if (data.access_token) {
    Alert.alert("Success", "You are now logged in");
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
