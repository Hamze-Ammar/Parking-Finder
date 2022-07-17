import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, dimensions, ProfilePicSize } from "../../../constants/styles";
import { FontAwesome5 } from "@expo/vector-icons";
// import { InputEdit } from "../../../ui/InputEdit";
// import { ButtonUpdate } from "../../../ui/ButtonUpdate";
import InputEdit from "../../../ui/InputEdit";
import ButtonUpdate from "../../../ui/ButtonUpdate";

const UserProfile = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.profilePic}>
          <FontAwesome5
            style={styles.img}
            name="user-alt"
            size={ProfilePicSize.diameter / 1.5}
            color="gray"
          />
        </View>
      </View>
      <View>
        <InputEdit label="Name" />
        <InputEdit label="Email" />
        <InputEdit label="Password" />
        <InputEdit label="Address" />
      </View>
      <ButtonUpdate>Update</ButtonUpdate>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  header: {
    height: 150,
    marginBottom: 150,
    backgroundColor: Colors.primary500,
    position: "relative",
  },
  profilePic: {
    flex: 1,
    height: ProfilePicSize.diameter,
    width: ProfilePicSize.diameter,
    borderRadius: ProfilePicSize.diameter / 2,
    backgroundColor: Colors.background200,
    position: "absolute",
    top: 75,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
