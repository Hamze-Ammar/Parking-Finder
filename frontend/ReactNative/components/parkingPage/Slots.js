import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Slot from "./Slot";
import { Colors } from "../../constants/styles";
import DashedCircle from "../../ui/DashedCircle";

const Slots = ({
  slots,
  setRefresh,
  setShowTimer,
  showTimer,
  reservationDuration,
  setShowPopupOptions,
  setReservedSlotID,
}) => {
  function displayTimer() {
    setShowTimer(true);
  }
  function hideTimer() {
    setShowTimer(false);
  }

  console.log(slots?.length, slots?.length / 2);

  return (
    <>
      {showTimer && (
        <View style={styles.DashedCircle}>
          <DashedCircle
            duration={reservationDuration}
            setShowTimer={hideTimer}
            setRefresh={setRefresh}
          />
        </View>
      )}
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.main}>
            <View style={styles.gate}></View>
            <View style={styles.parking}>
              <View style={styles.outerContainer}>
                <View style={styles.container}>
                  {slots &&
                    slots
                      .slice(0, parseInt(slots.length / 2) + 1)
                      .map((slot) => {
                        let state;
                        let side = "left";
                        if (!slot.is_available || slot.is_reserved) {
                          state = "left";
                        } else {
                          state = "empty";
                        }
                        return (
                          <Slot
                            key={slot.id}
                            id={slot.id}
                            state={state}
                            side={side}
                            number={slot.number}
                            is_reserved={slot.is_reserved}
                            setRefresh={setRefresh}
                            setShowTimer={displayTimer}
                            setShowPopupOptions={setShowPopupOptions}
                            setReservedSlotID={setReservedSlotID}
                          />
                        );
                      })}
                </View>
                <View style={styles.container}>
                  {slots &&
                    slots
                      .slice(parseInt(slots.length / 2), slots.length)
                      .map((slot) => {
                        let state;
                        let side = "right";
                        if (!slot.is_available || slot.is_reserved) {
                          state = "right";
                        } else {
                          state = "empty";
                        }
                        return (
                          <Slot
                            key={slot.id}
                            id={slot.id}
                            state={state}
                            side={side}
                            number={slot.number}
                            is_reserved={slot.is_reserved}
                            setRefresh={setRefresh}
                            setShowTimer={displayTimer}
                            setShowPopupOptions={setShowPopupOptions}
                            setReservedSlotID={setReservedSlotID}
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
    backgroundColor: Colors.background500,
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
    borderColor: Colors.background500,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContainer: {
    alignItems: "center",
  },
  DashedCircle: {
    zIndex: 1,
    flex: 1,
    position: "absolute",
    margin: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});
