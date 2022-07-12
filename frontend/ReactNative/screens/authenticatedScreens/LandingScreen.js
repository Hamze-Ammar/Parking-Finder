import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LandingPage from "../../components/landingPage/LandingPage";

const LandingScreen = () => {
  // AsyncStorage.removeItem("token");

  return <LandingPage />;
};

export default LandingScreen;
