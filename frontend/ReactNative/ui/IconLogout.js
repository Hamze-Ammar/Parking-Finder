import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function IconLogout({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <AntDesign name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconLogout;

const styles = StyleSheet.create({
  button: {
    marginRight: 15,
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
