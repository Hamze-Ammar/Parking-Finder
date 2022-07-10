import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        // style={styles.image}
        source={require("../assets/images/logo.png")}
      />
    </View>
  );
};

export default Logo;
