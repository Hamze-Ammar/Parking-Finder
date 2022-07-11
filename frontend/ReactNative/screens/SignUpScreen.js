import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../ui/Logo";
import BackIcon from "../ui/BackIcon";
import FormSignUp from "../components/signup/FormSignUp";

const SignUpScreen = () => {
  const navigation = useNavigation();

  function handleClick() {
    navigation.replace("Login");
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <BackIcon onPress={handleClick} />
        <Logo logo="logo-min" />
      </View>
      <View style={styles.formContainer}>
        <FormSignUp />
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
  header: {
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
    height: 200,
    margin: 50,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
