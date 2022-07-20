import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/styles";
import MapScreen from "../screens/authenticatedScreens/MapScreen";
import LandingScreen from "../screens/authenticatedScreens/LandingScreen";
// import Stack from '../App/Stack';
// const Stack = createNativeStackNavigator();

// const HomeStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Parking Finder"
//         component={LandingScreen}
//         options={{
//           headerStyle: { backgroundColor: Colors.primary500 },
//           headerTintColor: "white",
//           tabBarHideOnKeyboard: true,
//           tabBarActiveTintColor: Colors.primary500,
//           tabBarInactiveTintColor: "gray",
//         }}
//       />
//       <Stack.Screen
//         name="map"
//         component={MapScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default HomeStackNavigator;

// const styles = StyleSheet.create({});
