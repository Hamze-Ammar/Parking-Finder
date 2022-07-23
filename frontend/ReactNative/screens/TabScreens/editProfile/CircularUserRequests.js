import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

const CircularUserRequests = () => {
  //   const [refresh, setRefresh] = useState(true);
  //   useEffect(() => {
  //     setRefresh(!refresh);
  //   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.upperTxtWrapper}>
          <Ionicons name="trophy" size={24} color={Colors.primary500} />
          <Text style={styles.upperTxt}>Loyalty Balance</Text>
        </View>
        <View style={styles.circularOuterContainer}>
          <View style={[styles.circularContainer, styles.left]}>
            <CircularProgress
              value={58}
              initialValue={0}
              radius={60}
              duration={3000}
              progressValueColor={Colors.earning500}
              progressValueStyle={{
                fontWeight: "500",
                color: Colors.background500,
              }}
              activeStrokeColor={Colors.primary500}
              maxValue={65}
              title={"Requests"}
              // titleColor={Colors.marked400}
              titleStyle={styles.title}
            />
          </View>

          <View style={[styles.circularContainer, styles.right]}>
            <CircularProgress
              value={120}
              maxValue={180}
              radius={80}
              progressValueColor={Colors.earning500}
              activeStrokeColor={Colors.earning500}
              progressValueStyle={{
                fontWeight: "500",
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
        </View>
        <View>
          <Text style={styles.bigTitle}>1240pts</Text>
          <Text style={styles.smallTitle}>
            1200 points till your next reward
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CircularUserRequests;

const styles = StyleSheet.create({
  container: {
    height: 400,
    // bottom: 0,
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(0,0,0,0.74)",
  },
  scrollContainer: {
    // minWidth: "100%",
    flexGrow: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  circularOuterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  upperTxtWrapper: {
    flexDirection: "row",
    margin: 15,
  },
  upperTxt: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "500",
    // color: Colors.background500,
    color: Colors.secondary500,
  },
  title: {
    color: Colors.secondary500,
    fontSize: 10,
    fontWeight: "500",
  },
  circularContainer: {
    padding: 5,
    margin: 5,
  },
  left: {
    // marginRight: 220,
  },
  bigTitle: {
    fontSize: 40,
    fontWeight: "800",
    color: Colors.earning500,
  },
  smallTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: Colors.secondary500,
  },
});
