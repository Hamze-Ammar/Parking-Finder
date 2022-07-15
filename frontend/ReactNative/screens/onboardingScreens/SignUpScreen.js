import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../ui/Logo";
import BackIcon from "../../ui/BackIcon";
import FormSignUp from "../../components/signup/FormSignUp";
import CustomLink from "../../components/login/CustomLink";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Logo logo="mini" />
      </View>
      <View style={styles.formContainer}>
        <FormSignUp />
      </View>
      <View style={styles.footer}>
        <Text style={styles.fade}>Already have an account? </Text>
        <CustomLink text="Login" navigateTo="Login" />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    height: 200,
    marginTop: 50,
  },
  formContainer: {
    flex: 2,
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
    justifyContent: "center",
  },
  fade: {
    color: "#aaa",
  },
});
