import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Slot from "../../components/parkingPage/Slot";
import { Button } from "../../ui/Button";
import { Colors } from "../../constants/styles";

import { getParkingById } from "./parkingController";

const ParkingView = ({ city_name }) => {
  const [parking, setParking] = useState({});
  const [parkingName, setParkingName] = useState("");
  const [slots, setSlots] = useState([]);
  const [numberOfSlots, setNumberOfSlots] = useState();

  // Controller get parking by id
  let id = "1";
  useEffect(() => {
    const fetchData = async () => {
      setParking(await getParkingById(id));
      //   console.log(parking);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (parking) {
      //   console.log(parking.status);
      setSlots(parking.res.slots);
      setNumberOfSlots(parking.res.total_slots);
      setParkingName(parking.res.name);
    }
  }, [parking]);

  if (slots.length) {
    console.log(slots.length / 2);
    console.log(slots[4].is_available);
  }

  return (
    <View style={styles.main}>
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
        <View style={styles.gate}></View>
      </View>

      {/* <View style={styles.btnContainer}>
        <Button>7 available slots</Button>
      </View> */}
    </View>
  );
};

export default ParkingView;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#eee",
  },
  parking: {
    backgroundColor: "#eee",
  },
  gate: {
    height: 15,
    backgroundColor: Colors.secondary500,
    width: 100,
    alignSelf: "center",
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
