import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../ui/Button";
import { SpecialButton } from "../../ui/SpecialButton";
import { Input } from "../../ui/Input";

const Form = () => {
  return (
    <View>
      <Input placeholder="Enter Your Email" />
      <Input placeholder="Enter Your Password" />
      <Button>Sign In</Button>
      <SpecialButton>Continue with google</SpecialButton>
    </View>
  );
};

export default Form;
