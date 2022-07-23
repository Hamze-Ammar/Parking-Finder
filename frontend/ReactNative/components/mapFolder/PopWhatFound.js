import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../../constants/styles";

const PopWhatFound = ({ numOfParkings }) => {
  const [total, setTotal] = useState(numOfParkings);
  useEffect(() => {
    setTotal(numOfParkings);
  }, [numOfParkings]);

  console.log(total);
  return (
    <View style={styles.container}>
      {total ? (
        <Text style={styles.text}>
          {total === 1 ? total + " Parking" : total + " Parkings"}
        </Text>
      ) : (
        <Text style={styles.text}>No available parkings in this area</Text>
      )}
    </View>
  );
};

export default PopWhatFound;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.secondary500,
  },
});
