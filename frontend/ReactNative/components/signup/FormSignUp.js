import { useState } from "react";

import { View, StyleSheet } from "react-native";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import validateInput from "./SignUpController";

const FormSignUp = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const {
    name: nameIsInvalid,
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "name":
        setEnteredName(enteredValue);
        break;
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    let validation = validateInput({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
    console.log({ validation });
    if (validation !== "valid") {
      setCredentialsInvalid(validation);
    } else {
      console.log("Valid Input Gooo");
      //   RegisterNewUser();
    }
  }

  return (
    <View>
      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "name")}
        value={enteredName}
        keyboardType="default"
        isInvalid={nameIsInvalid}
        placeholder="Name"
      />

      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
        placeholder="Email"
      />

      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "password")}
        secure
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
        placeholder="Password"
      />

      <Input
        placeholder="Confirm Password"
        onUpdateValue={updateInputValueHandler.bind(this, "confirmPassword")}
        secure
        value={enteredConfirmPassword}
        isInvalid={passwordsDontMatch}
      />

      <View style={styles.btnContainer}>
        <Button onPress={submitHandler}>Sign Up</Button>
      </View>
    </View>
  );
};

export default FormSignUp;

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 40,
  },
});
