import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Colors, dimensions, ProfilePicSize } from "../../../constants/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import EditCredentials from "./EditCredentials";
import OverviewProfile from "./OverviewProfile";
import { getUserProfilePic } from "./overviewController";
import { AuthContext } from "../../../store/auth-context";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const UserProfile = () => {
  const authCtx = useContext(AuthContext);
  const [showInputField, setShowInputField] = useState(false);
  const [pickedImage, setPickedImage] = useState();

  //====RefreshControl====
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  //====================

  useEffect(() => {
    const fetchProfilePic = async (token) => {
      let encodedBase64 = await getUserProfilePic(token);
      let src = `data:image/gif;base64,${encodedBase64}`;
      setPickedImage(src);
    };
    fetchProfilePic(authCtx.token);
  }, []);

  let imagePreview = (
    <FontAwesome5
      name="user-alt"
      size={ProfilePicSize.diameter / 1.5}
      color="gray"
    />
  );

  if (pickedImage) {
    imagePreview = (
      <Image
        style={styles.img}
        source={{ uri: pickedImage }}
      />
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.profilePic}>{imagePreview}</View>
        </View>
        {showInputField ? (
          <EditCredentials
            setShowInputField={() => {
              setShowInputField(!showInputField);
            }}
            pickedImage={pickedImage}
            setPickedImage={setPickedImage}
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
    margin: 5,
    bottom: 35,
  },
  img: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: ProfilePicSize.diameter / 2,
  },
});
