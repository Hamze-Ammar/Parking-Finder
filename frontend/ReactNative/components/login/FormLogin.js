import { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../../ui/Button";
import { SpecialButton } from "../../ui/SpecialButton";
import { Input } from "../../ui/Input";

import { validateInput } from "./LoginController";
import LoginUser from "./LoginController";

const FormLogin = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
  });

  const { email: emailIsInvalid, password: passwordIsInvalid } =
    credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  const submitHandler = () => {
    const validation = validateInput({
      email: enteredEmail,
      password: enteredPassword,
    });
    if (validation !== "valid") {
      setCredentialsInvalid(validation);
    } else {
      let credentials = {
        email: enteredEmail,
        password: enteredPassword,
      };
      LoginUser(credentials);
    }
  };

  return (
    <View>
      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
        placeholder="Enter Your Email"
      />

      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "password")}
        secure
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
        placeholder="Enter Your Password"
      />
      <Button onPress={submitHandler}>Sign In</Button>
      <SpecialButton>Continue with google</SpecialButton>
    </View>
  );
};

export default FormLogin;
