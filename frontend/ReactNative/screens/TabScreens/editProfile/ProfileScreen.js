import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  RefreshControl,
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

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const UserProfile = () => {
  const [showInputField, setShowInputField] = useState(false);

  //====RefreshControl====
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  //====================

  return (
    // <KeyboardAvoidingView style={styles.container}>
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.mainContainer}>
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
          <View style={styles.overViewContainer}>
            <OverviewProfile
              setShowInputField={() => {
                setShowInputField(!showInputField);
              }}
              refreshing={refreshing}
            />
          </View>
        )}
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    height: 150,
    marginBottom: 110,
    backgroundColor: Colors.primary500,
    position: "relative",
  },
  profilePic: {
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
  overViewContainer: {
    // flexGrow: 1,
    // marginBottom: 35,
    margin: 5,
    bottom: 35,
  },
});
