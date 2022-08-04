import { StyleSheet, View } from "react-native";
import { launchCameraAsync } from "expo-image-picker";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "../../../constants/styles";

const ImagePicker = ({ setPickedImage, setPickedImageBase64 }) => {
  async function takeImageHandler() {
    const image = await launchCameraAsync({
      aspect: [4, 4],
      quality: 0.2,
      base64: true,
    });
    if (image) {
      setPickedImage(image.uri);
      setPickedImageBase64(image.base64);
    }
  }
  return (
    <View style={styles.editIconContainer}>
      <Fontisto
        name="camera"
        size={35}
        color={Colors.background200}
        onPress={takeImageHandler}
      />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  editIconContainer: {
    position: "absolute",
    top: 110,
    left: 300,
    fontSize: 25,
    size: 26,
  },
});
