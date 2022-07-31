import { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import FavoritesContextProvider, {
  FavoritesContext,
} from "./store/favorites-context";
import ParkingContextProvider from "./store/parkingContext";
import AppLoading from "expo-app-loading";
import { Colors } from "./constants/styles";
import IconLogout from "./ui/IconLogout";
import { getFavouriteParkings } from "./components/favorites/favoriteController";
import LoginScreen from "./screens/onboardingScreens/LoginScreen";
import SignUpScreen from "./screens/onboardingScreens/SignUpScreen";
import LandingScreen from "./screens/authenticatedScreens/LandingScreen";
import ParkingScreen from "./screens/authenticatedScreens/ParkingScreen";
import Favorites from "./screens/TabScreens/Favorites";
import ProfileScreen from "./screens/TabScreens/editProfile/ProfileScreen";
import MapScreen from "./screens/authenticatedScreens/MapScreen";
// import HomeStackNavigator from "./stacks/HomeStackNavigator";

// Handling error/warning Require cycle && reanimatedWorklet
LogBox.ignoreLogs(["Require cycle:"]);
global.__reanimatedWorkletInit = () => {};
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Parking Finder"
        component={LandingScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: Colors.primary500,
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Stack.Screen
        name="map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function BottomTabNavigator() {
  const authCtx = useContext(AuthContext);
  // const ParkingCtx = useContext(ParkingContext);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.primary500,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Parking"
        component={ParkingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-sport" color={color} size={size} />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
          headerShown: false
        }}
      /> */}
      <BottomTab.Screen
        name="Favorite Parkings"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-bookmark" color={color} size={size} />
          ),
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => {
            return (
              <FontAwesome
                name="car"
                style={{ marginLeft: 15 }}
                size={30}
                color={Colors.background200}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerLeft: () => {
            return (
              <FontAwesome
                name="drivers-license"
                size={30}
                style={{ marginLeft: 15 }}
                color={Colors.background200}
              />
            );
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
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
      // const storedFavorites = await AsyncStorage.getItem("favorites");
      // console.log({ storedFavorites });

      if (storedToken) {
        let parkings = await getFavouriteParkings(storedToken);
        if (parkings) {
          // const myStoredFavorites = JSON.parse(storedFavorites);
          favoritesCtx.storeFavorites(parkings);
        }
        authCtx.authenticate(storedToken);
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

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <FavoritesContextProvider>
          <ParkingContextProvider>
            <Root />
          </ParkingContextProvider>
        </FavoritesContextProvider>
      </AuthContextProvider>
    </>
  );
}
