import React from "react";
import { View, StyleSheet } from "react-native";

import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";

const FormSignUp = () => {
  return (
    <View>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <View style={styles.btnContainer}>
        <Button>Sign Up</Button>
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
