import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

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
    handleResponse(data);
  } catch (err) {
    console.log(err);
  }
};
export default LoginUser;

const handleResponse = (data) => {
  if (data.error) {
    if (data.error === "Unauthorized") {
      Alert.alert("Invalid credentials", "Wrong email or password!");
    }
  }
  if (data.access_token) {
    AsyncStorage.setItem("token", data.access_token);
    const navigation = useNavigation();
    navigation.replace("landing");
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
