import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Colors } from "../constants/styles";

global.__reanimatedWorkletInit = () => {};

const DashedCircle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          radius={160}
          initialValue={100}
          value={0}
          inActiveStrokeOpacity={0.5}
          activeStrokeWidth={35}
          inActiveStrokeWidth={45}
          onAnimationComplete={() => console.log("helo")}
          progressValueStyle={{
            fontWeight: "300",
            color: Colors.background500,
          }}
          activeStrokeSecondaryColor={Colors.primary500}
          inActiveStrokeColor="rgba(255,255,255,0.4)"
          duration={1000}
          dashedStrokeConfig={{
            count: 60,
            width: 7,
          }}
          //   subtitle='Slot has been Reserved for 5 min.'
          //   title='min'

          //   circleBackgroundColor="rgba(0,0,0,0.4)"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 72,
    // width: 86,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.74)",
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
