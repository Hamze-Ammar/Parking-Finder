import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Row = ({
  id,
  name,
  address,
  totalSlots,
  openAt,
  closeAt,
  deleteFavorite,
}) => {
  const navigation = useNavigation();

  const navigateToParking = () => {
    navigation.navigate("Parking", {
      city: address,
      id: id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        onLongPress={navigateToParking}
        android_ripple={{ color: "#ddf" }}
      >
        <View style={styles.left}>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.txtRow}>
            <MaterialIcons name="location-city" size={18} color="gray" />
            <Text style={styles.text}>{address}</Text>
          </View>
          <View style={styles.txtRow}>
            <MaterialIcons name="account-tree" size={18} color="gray" />
            <Text style={styles.text}>{totalSlots} total slots</Text>
          </View>
          <View style={styles.txtRow}>
            <Ionicons name="time" size={18} color="gray" />
            <Text style={styles.text}>
              Open from: {openAt} To {closeAt}
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.right}>
        <Pressable style={({ pressed }) => pressed && styles.pressed}>
          <Ionicons
            name="md-remove-circle-outline"
            size={30}
            color={Colors.marked400}
            onPress={() => {
              deleteFavorite(id);
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 120,
    backgroundColor: Colors.background200,
    borderRadius: 10,
    padding: 7,
    marginBottom: 15,
    borderLeftWidth: 15,
    borderLeftColor: Colors.secondary500,
    shadowColor: Colors.secondary500,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  left: {
    flex: 5,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
    alignContent: "flex-end",
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary500,
  },
  text: {
    color: "gray",
    marginLeft: 7,
  },
  txtRow: {
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.5,
  },
});
