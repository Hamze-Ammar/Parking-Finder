import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import InputEdit from "../../../ui/InputEdit";
import ButtonUpdate from "../../../ui/ButtonUpdate";
import { Ionicons } from "@expo/vector-icons";
import { dimensions } from "../../../constants/styles";
import { getUserProfile, editProfile } from "./overviewController";
import { AuthContext } from "../../../store/auth-context";

const EditCredentials = ({ setShowInputField }) => {
  const authCtx = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  console.log(profile);

  useEffect(() => {
    const fetchInfo = async (token) => {
      let response = await getUserProfile(token);
      if (response?.name) {
        setProfile(response);
      }
    };
    fetchInfo(authCtx.token);
  }, []);

  const handlePress = async () => {
    console.log("clicked");
    let msg = await editProfile(authCtx.token, profile);
    if (msg) {
      Alert.alert("Message", "Your profile has been successfully updated");
      setProfile(null);
    }
  };

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "name":
        setProfile({ ...profile, name: enteredValue });
        break;
      case "email":
        setProfile({ ...profile, email: enteredValue });
        break;
      case "plate_number":
        setProfile({ ...profile, plate_number: enteredValue });
        break;
      case "address":
        setProfile({ ...profile, address: enteredValue });
        break;
    }
  }

  return (
    <>
      <Ionicons
        style={styles.close}
        name="close"
        size={24}
        color="gray"
        onPress={setShowInputField}
      />
      <View>
        <InputEdit
          label="Name"
          // placeholder={profile.name}
          value={profile?.name ? profile.name : null}
          onUpdateValue={updateInputValueHandler.bind(this, "name")}
        />
        <InputEdit
          label="Email"
          value={profile?.email ? profile.email : null}
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
        />
        <InputEdit
          label="Plate Number"
          value={profile?.plate_number ? profile.plate_number : null}
          onUpdateValue={updateInputValueHandler.bind(this, "plate_number")}
        />
        <InputEdit
          label="Address"
          value={profile?.address ? profile.address : null}
          onUpdateValue={updateInputValueHandler.bind(this, "address")}
        />
      </View>
      <ButtonUpdate onPress={handlePress}>Update</ButtonUpdate>
    </>
  );
};

export default EditCredentials;

const styles = StyleSheet.create({
  close: {
    flex: 1,
    left: dimensions.width - (dimensions.width * 15) / 100,
  },
});
