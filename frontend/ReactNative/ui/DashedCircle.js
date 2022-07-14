import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

global.__reanimatedWorkletInit = () => {};

const DashedCircle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          value={100}
          radius={30}
          inActiveStrokeOpacity={0.5}
          activeStrokeWidth={20}
          inActiveStrokeWidth={20}
          progressValueStyle={{ fontWeight: "100", color: "black" }}
          activeStrokeSecondaryColor="purple"
          inActiveStrokeColor="rgba(255,255,255,0.4)"
          duration={10000}
          dashedStrokeConfig={{
            count: 40,
            width: 2,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 72,
    width: 86,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#181818",
    // color: "black",
  },
  scrollContainer: {
    minWidth: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DashedCircle;
