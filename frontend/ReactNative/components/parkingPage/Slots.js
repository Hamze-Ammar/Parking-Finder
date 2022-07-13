import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Slot from "./Slot";
import { Colors } from "../../constants/styles";

const Slots = ({ slots }) => {
  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.main}>
            <View style={styles.gate}></View>
            <View style={styles.parking}>
              <View style={styles.outerContainer}>
                <View style={styles.container}>
                  {slots &&
                    slots.slice(0, slots.length / 2).map((slot) => {
                      let name;
                      let side = "left";
                      if (!slot.is_available || slot.is_reserved) {
                        name = "left";
                      } else {
                        name = "empty";
                      }
                      return (
                        <Slot
                          key={slot.id}
                          name={name}
                          side={side}
                          number={slot.number}
                        />
                      );
                    })}
                </View>
                <View style={styles.container}>
                  {slots &&
                    slots.slice(slots.length / 2, slots.length).map((slot) => {
                      let name;
                      let side = "right";
                      if (!slot.is_available || slot.is_reserved) {
                        name = "right";
                      } else {
                        name = "empty";
                      }
                      return (
                        <Slot
                          key={slot.id}
                          name={name}
                          side={side}
                          number={slot.number}
                        />
                      );
                    })}
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default Slots;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#eee",
  },
  gate: {
    height: 15,
    backgroundColor: Colors.secondary500,
    width: 140,
    alignSelf: "center",
    borderRadius: 4,
  },
  outerContainer: {
    borderWidth: 10,
    borderBottomWidth: 0,
    borderColor: Colors.background500,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContainer: {
    alignItems: "center",
  },
});
