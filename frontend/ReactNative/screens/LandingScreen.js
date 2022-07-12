import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LandingScreen = () => {
  AsyncStorage.removeItem("token");

  return (
    <View>
      <Text>LandingScreen</Text>
    </View>
  );
};

export default LandingScreen;
