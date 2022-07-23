import { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Slot from "../../components/parkingPage/Slot";
import { Button } from "../../ui/Button";
import { Colors } from "../../constants/styles";
import { AuthContext } from "../../store/auth-context";

import { getParkingById } from "./parkingController";
import ParkingHeader from "./ParkingHeader";
import NotFound from "../../util/NotFound";
import Slots from "./Slots";
import LoadingOverlay from "../../ui/LoadingOverlay";

const ParkingView = ({
  cityName,
  setTitle,
  parkingId,
  setMyParking,
  duration,
}) => {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState(authCtx.token || null);

  const [parking, setParking] = useState(null);
  const [parkingName, setParkingName] = useState("");
  const [slots, setSlots] = useState(null);
  const [numberOfSlots, setNumberOfSlots] = useState();
  const [availableSlots, setAvailableSlots] = useState(0);
  const [not_found, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  console.log({ parking });
  useEffect(() => {
    setNotFound(false);
    if (!parkingId) {
      return;
    }
    setLoading(true);
    const fetchData = async () => {
      // console.log({ parkingId });
      const res = await getParkingById(parkingId, token);
      // console.log("res                  .....       ", res);
      if (res) {
        setParking(res); // To be passed to the child
        setMyParking(res); // To be returned to the parent
      } else if (!res) {
        setNotFound(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [parkingId, refresh]);

  useEffect(() => {
    if (parking) {
      function upload() {
        setAvailableSlots(parking.availableSpots);
        setSlots(parking.res.slots);
        setNumberOfSlots(parking.res.total_slots);
        setParkingName(parking.res.name);
        setTitle(parking.res.name);
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
          min_away={duration}
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
