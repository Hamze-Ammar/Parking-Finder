import { StyleSheet, Text, View } from "react-native";
import Title from "../../ui/Title";
import ReservationTime from "./ReservationTime";
import { Colors, dimensions } from "../../constants/styles";

const PopupReservation = ({ onPress }) => {
  return (
    <View style={styles.popupContainer}>
      <Title>Reserve your parking before you arrive for:</Title>
      <View>
        <ReservationTime text={"10 seconds"} duration={10} onPress={onPress} />
        <ReservationTime text={"30 seconds"} duration={30} onPress={onPress} />
        <ReservationTime text={"1 minute"} duration={60} onPress={onPress} />
        <ReservationTime text={"5 minutes"} duration={300} onPress={onPress} />
      </View>
    </View>
  );
};

export default PopupReservation;

const styles = StyleSheet.create({
});
