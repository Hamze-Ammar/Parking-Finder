import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import ButtonUpdate from "../../../ui/ButtonUpdate";
import CircularUserRequests from "./CircularUserRequests";

const OverviewProfile = ({ setShowInputField, refreshing }) => {
  const handleClick = () => {
    setShowInputField();
  };
  const image = require("../../../assets/images/earnPoints4.png");
  return (
    <View style={styles.mainContainer}>
      <ButtonUpdate mini={true} onPress={handleClick}>
        Edit Profile
      </ButtonUpdate>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={image}
          resizeMode={"stretch"}
          style={styles.image}
        >
          <View style={styles.container}>
            <CircularUserRequests refreshing={refreshing} />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default OverviewProfile;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  image: {
    // margin: 10,
    // flex: 1,
    // justifyContent: "center",
    // opacity: 0.5,
    // borderRadius: 10,
    // overflow: "hidden",
  },
  imageContainer: {
    flexGrow: 1,
    margin: 15,
  },
});
