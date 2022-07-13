import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Slot from "../../components/parkingPage/Slot";
import { Button } from "../../ui/Button";
import { Colors } from "../../constants/styles";

import { getParkingById } from "./parkingController";
import ParkingHeader from "./ParkingHeader";
import NotFound from "../../util/NotFound";
import Slots from "./Slots";

const ParkingView = ({ city_name }) => {
  const [parking, setParking] = useState(null);
  const [parkingName, setParkingName] = useState("");
  const [slots, setSlots] = useState([]);
  const [numberOfSlots, setNumberOfSlots] = useState();
  const [availableSlots, setAvailableSlots] = useState(0);

  // Controller get parking by id
  let id = "1";
  useEffect(() => {
    const fetchData = async () => {
      const res = await getParkingById(id);
      if (res) {
        setParking(res);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (parking) {
      setAvailableSlots(parking.availableSpots);
      setSlots(parking.res.slots);
      setNumberOfSlots(parking.res.total_slots);
      setParkingName(parking.res.name);
    }
  }, [parking]);

  return (
    <>
      {parking ? (
        <ParkingHeader
          name={parkingName}
          total={numberOfSlots}
          available_slots={availableSlots}
          min_away={"7"}
        />
      ) : (
        <NotFound />
      )}
      {slots && <Slots slots={slots} />}
    </>
  );
};

export default ParkingView;

const styles = StyleSheet.create({});
