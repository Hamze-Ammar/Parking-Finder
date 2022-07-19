import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Colors, dimensions, ProfilePicSize } from "../../../constants/styles";
import { FontAwesome5 } from "@expo/vector-icons";
// import { InputEdit } from "../../../ui/InputEdit";
// import { ButtonUpdate } from "../../../ui/ButtonUpdate";
import InputEdit from "../../../ui/InputEdit";
import ButtonUpdate from "../../../ui/ButtonUpdate";
import EditCredentials from "./EditCredentials";
import OverviewProfile from "./OverviewProfile";

const UserProfile = () => {
  const [showInputField, setShowInputField] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView>
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
          {showInputField ? (
            <EditCredentials
              setShowInputField={() => {
                setShowInputField(!showInputField);
              }}
            />
          ) : (
            <OverviewProfile
              setShowInputField={() => {
                setShowInputField(!showInputField);
              }}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  header: {
    height: 150,
    marginBottom: 110,
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
