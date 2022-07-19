import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { Colors } from "../../../constants/styles";

const CircularUserRequests = () => {
  //   const [refresh, setRefresh] = useState(true);
  //   useEffect(() => {
  //     setRefresh(!refresh);
  //   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.circularContainer, styles.left]}>
          <CircularProgress
            value={58}
            initialValue={0}
            radius={60}
            duration={3000}
            progressValueColor={Colors.secondary500}
            progressValueStyle={{
              fontWeight: "300",
              color: Colors.background500,
            }}
            activeStrokeColor={Colors.primary500}
            maxValue={65}
            title={"Requests"}
            titleColor={Colors.secondary500}
            titleStyle={styles.title}
          />
        </View>

        <View style={[styles.circularContainer, styles.right]}>
          <CircularProgress
            value={120}
            maxValue={180}
            radius={80}
            progressValueColor={Colors.secondary500}
            activeStrokeColor={Colors.marked400}
            progressValueStyle={{
              fontWeight: "300",
              color: Colors.background500,
            }}
            duration={2000}
            inActiveStrokeColor={Colors.primary500}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={40}
            activeStrokeWidth={20}
            title={"Reservations"}
            titleStyle={styles.title}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CircularUserRequests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(0,0,0,0.74)",
  },
  scrollContainer: {
    // minWidth: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "gray",
    fontSize: 10,
    fontWeight: "500",
  },
  circularContainer: {
    padding: 5,
    margin: 5,
  },
  left: {
    marginRight: 220,
  },
});
