import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Logo from "../../ui/Logo";
import FormLogin from "../../components/login/FormLogin";
import LoadingOverlay from "../../ui/LoadingOverlay";
import CustomLink from "../../components/login/CustomLink";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.formContainer}>
          <FormLogin setIsAuthenticating={setIsAuthenticating} />
        </View>
        <View style={styles.footer}>
          <CustomLink text="forget password" />
          <CustomLink text="create an account" />
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 2,
    height: 200,
    margin: 50,
  },
  formContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  footer: {
    marginBottom: 20,
    alignItems: "flex-end",
    flex: 1,
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
