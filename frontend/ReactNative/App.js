import { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import AppLoading from "expo-app-loading";
import { Colors } from "./constants/styles";

import LoginScreen from "./screens/onboardingScreens/LoginScreen";
import SignUpScreen from "./screens/onboardingScreens/SignUpScreen";
import LandingScreen from "./screens/authenticatedScreens/LandingScreen";
import ParkingScreen from "./screens/authenticatedScreens/ParkingScreen";
import IconHeaderButton from "./ui/IconHeaderButton";

const Stack = createNativeStackNavigator();

// Handling error Require cycle
LogBox.ignoreLogs(["Require cycle:"]);

global.__reanimatedWorkletInit = () => {};

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      // console.log({ storedToken });

      if (storedToken) {
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
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      initialRouteName="landing"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
        // headerBackButtonMenuEnabled: true,
      }}
    >
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconHeaderButton
              icon="options-vertical"
              size={24}
              color={tintColor}
              // onPress={() => navigation.navigate("AddPlace")}
            />
          ),
        })}
      />
      <Stack.Screen name="parking" component={ParkingScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
