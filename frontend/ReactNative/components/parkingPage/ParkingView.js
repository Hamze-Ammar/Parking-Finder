import { useContext } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { ParkingContext } from "../../store/parkingContext";
import PopupReservation from "./PopupReservation";
import { getParkingById } from "./parkingController";
import ParkingHeader from "./ParkingHeader";
import NotFound from "../../util/NotFound";
import Slots from "./Slots";
import LoadingOverlay from "../../ui/LoadingOverlay";
import { Colors, dimensions } from "../../constants/styles";
import { sendReservation } from "./parkingController";

const ParkingView = ({
  cityName,
  setTitle,
  parkingId,
  setMyParking,
  duration,
}) => {
  const authCtx = useContext(AuthContext);
  const parkingCtx = useContext(ParkingContext);

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
  const [showPopupOptions, setShowPopupOptions] = useState(false);
  const [reservationDuration, setReservationDuration] = useState();
  const [reservedSlotID, setReservedSlotID] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getParkingById(parkingId, token);
      if (res) {
        setParking(res); // To be passed to the child
        setMyParking(res); // To be returned to the parent
      } else if (!res) {
        setNotFound(true);
      }
      setLoading(false);
    };
    setNotFound(false);
    if (!parkingId) {
      return;
    }
    setLoading(true);

    fetchData();
  }, [parkingId, refresh, parkingCtx.refresh]);

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

  // Handle set Timer and reservation
  const handleSetTimer = (duration) => {
    setShowPopupOptions(false);
    setReservationDuration(duration);
    setShowTimer(true);
    sendReservation(reservedSlotID, duration, token);
  };

  if (not_found) {
    return <NotFound />;
  }

  if (loading) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <View>
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
            reservationDuration={reservationDuration}
            showTimer={showTimer}
            setShowPopupOptions={setShowPopupOptions}
            setReservedSlotID={setReservedSlotID}
          />
        )}
        {showPopupOptions && (
          <View style={styles.popupOuterContainer}>
            <View style={styles.popupContainer}>
              <PopupReservation onPress={handleSetTimer} />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default ParkingView;

const styles = StyleSheet.create({
  popupOuterContainer: {
    position: "absolute",
    width: dimensions.width,
    height: dimensions.height,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContainer: {
    width: "80%",
    height: "45%",
    borderRadius: 15,
    padding: 15,
    backgroundColor: Colors.background200,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
});
