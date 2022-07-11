import { View, Text, Image, StyleSheet } from "react-native";

import { Input } from "../ui/Input";
import Form from "../components/login/FormLogin";
import Title from "../ui/Title";
import Logo from "../ui/Logo";
import CustomLink from "../components/login/CustomLink";
import FormLogin from "../components/login/FormLogin";

const LoginScreen = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        {/* <Title>Sign In</Title> */}
        <View style={styles.formContainer}>
          <FormLogin />
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
