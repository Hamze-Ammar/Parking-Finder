import { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../../ui/Button";
import { SpecialButton } from "../../ui/SpecialButton";
import { Input } from "../../ui/Input";

const FormLogin = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  return (
    <View>
      <Input
        // onUpdateValue={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
        // isInvalid={emailIsInvalid}
        placeholder="Enter Your Email"
      />

      <Input
        // onUpdateValue={updateInputValueHandler.bind(this, "password")}
        secure
        value={enteredPassword}
        // isInvalid={passwordIsInvalid}
        placeholder="Enter Your Password"
      />
      <Button>Sign In</Button>
      <SpecialButton>Continue with google</SpecialButton>
    </View>
  );
};

export default FormLogin;
