import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../../constants/styles";
import Title from "../../ui/Title";

const ReservationTime = ({ text, duration, onPress }) => {
  return (
    <View style={styles.titleOuterContainer}>
      <View style={styles.titleContainer}>
        <Pressable
          android_ripple={{ color: "#12ea98" }}
          onPress={() => onPress(duration)}
        >
          <Title>{text}</Title>
        </Pressable>
      </View>
    </View>
  );
};

export default ReservationTime;

const styles = StyleSheet.create({
  titleOuterContainer: {
    overflow: "hidden",
  },
  titleContainer: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: Colors.background500,
    overflow: "hidden",
  },
  colored: {
    backgroundColor: "red",
  },
  pressed: {
    opacity: 0.7,
  },
});
