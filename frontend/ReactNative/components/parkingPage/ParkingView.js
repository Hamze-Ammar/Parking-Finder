import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Slot from "../../components/parkingPage/Slot";
import { Button } from "../../ui/Button";
import { Colors } from "../../constants/styles";

import { getParkingById } from "./parkingController";
import ParkingHeader from "./ParkingHeader";
import NotFound from "../../util/NotFound";
import Slots from "./Slots";
import LoadingOverlay from "../../ui/LoadingOverlay";

const ParkingView = ({ city_name, setTitle, setId }) => {
  const [parking, setParking] = useState(null);
  const [parkingName, setParkingName] = useState("");
  const [slots, setSlots] = useState(null);
  const [numberOfSlots, setNumberOfSlots] = useState();
  const [availableSlots, setAvailableSlots] = useState(0);
  const [not_found, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  // Controller get parking by id
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let id = "1";
      const res = await getParkingById(id);
      if (res) {
        setParking(res);
      } else if (!res) {
        setNotFound(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [refresh]);

  useEffect(() => {
    if (parking) {
      async function upload() {
        setAvailableSlots(parking.availableSpots);
        setSlots(parking.res.slots);
        setNumberOfSlots(parking.res.total_slots);
        setParkingName(parking.res.name);
        await setTitle(parking.res.name);
        await setId(parking.res.id);
      }
      upload();
    }
  }, [parking]);

  if (not_found) {
    return <NotFound />;
  }

  if (loading) {
    return <LoadingOverlay />;
  }

  return (
    <>
      {parking && (
        <ParkingHeader
          name={parkingName}
          total={numberOfSlots}
          available_slots={availableSlots}
          min_away={"7"}
        />
      )}
      {slots && (
        <Slots
          slots={slots}
          setRefresh={() => {
            setRefresh(!refresh);
          }}
          setShowTimer={(boolean) => {
            setShowTimer(boolean);
          }}
          showTimer={showTimer}
        />
      )}
    </>
  );
};

export default ParkingView;

const styles = StyleSheet.create({});
