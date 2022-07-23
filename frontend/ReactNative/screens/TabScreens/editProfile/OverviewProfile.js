import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import ButtonUpdate from "../../../ui/ButtonUpdate";
import CircularUserRequests from "./CircularUserRequests";

const OverviewProfile = ({ setShowInputField, refreshing }) => {
  const handleClick = () => {
    setShowInputField();
  };
  const image = require("../../../assets/images/earnPoints2.png");
  return (
    <View>
      <ButtonUpdate mini={true} onPress={handleClick}>
        Edit Profile
      </ButtonUpdate>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={image}
          resizeMode={"stretch"}
          style={styles.image}
          // style={{ width: "100%", height: "100%" }}
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
    // flex: 3,
    // bottom: 0,
    // backgroundColor: "red",
  },
});
