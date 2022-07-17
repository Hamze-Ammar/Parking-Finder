import { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthContextProvider, { AuthContext } from "./store/auth-context";
import FavoritesContextProvider, {
  FavoritesContext,
} from "./store/favorites-context";
import AppLoading from "expo-app-loading";
import { Colors } from "./constants/styles";
import IconLogout from "./ui/IconLogout";

import LoginScreen from "./screens/onboardingScreens/LoginScreen";
import SignUpScreen from "./screens/onboardingScreens/SignUpScreen";
import LandingScreen from "./screens/authenticatedScreens/LandingScreen";
import ParkingScreen from "./screens/authenticatedScreens/ParkingScreen";
import Favourites from "./screens/TabScreens/Favourites";
import UserProfile from "./screens/TabScreens/UserProfile";

// Handling error Require cycle
LogBox.ignoreLogs(["Require cycle:"]);
global.__reanimatedWorkletInit = () => {};

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const authCtx = useContext(AuthContext);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={Colors.secondary500} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Parking"
        component={ParkingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="car-sport"
              color={Colors.secondary500}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favourites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-bookmark"
              color={Colors.secondary500}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={Colors.secondary500} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconLogout
              icon="logout"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedFavorites = await AsyncStorage.getItem("favorites");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      if (storedFavorites) {
        const myStoredFavorites = JSON.parse(storedFavorites);
        // console.log({ myStoredFavorites });
        favoritesCtx.storeFavorites(myStoredFavorites);
      }

      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }
  return <Navigation />;
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <BottomTabNavigator />}
    </NavigationContainer>
  );
}

function AuthStack() {
  return (
    <>
      <StatusBar style="dark" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    </>
  );
}

// function AuthenticatedStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="landing"
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: "white",
//         contentStyle: { backgroundColor: Colors.primary500 },
//         // headerBackButtonMenuEnabled: true,
//       }}
//     >
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <FavoritesContextProvider>
          <Root />
        </FavoritesContextProvider>
      </AuthContextProvider>
    </>
  );
}
