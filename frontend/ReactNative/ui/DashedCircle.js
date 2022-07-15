import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Colors } from "../constants/styles";
import {TIMER} from '../constants/backendSync'

global.__reanimatedWorkletInit = () => {};

const DashedCircle = ({ setRefresh, setShowTimer }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          radius={160}
          initialValue={10}
          value={0}
          inActiveStrokeOpacity={0.5}
          activeStrokeWidth={35}
          inActiveStrokeWidth={45}
          onAnimationComplete={() => {
            setShowTimer();
            setRefresh();
          }}
          progressValueStyle={{
            fontWeight: "300",
            color: Colors.background500,
          }}
          activeStrokeSecondaryColor={Colors.primary500}
          inActiveStrokeColor="rgba(255,255,255,0.4)"
          duration={TIMER}
          dashedStrokeConfig={{
            count: 40,
            width: 7,
          }}
          //   subtitle='Slot has been Reserved for 5 min.'
          title="Seconds Left"
          titleStyle={styles.title}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.74)",
  },
  scrollContainer: {
    minWidth: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
  },
});

export default DashedCircle;
