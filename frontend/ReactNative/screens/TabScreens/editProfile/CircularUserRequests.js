import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { getOverviewInfo } from "./overviewController";
import { AuthContext } from "../../../store/auth-context";
import { useFonts } from "expo-font";

const CircularUserRequests = ({ refreshing }) => {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState(authCtx.token || null);
  const [info, setInfo] = useState();
  const [totalRequests, setTotalRequests] = useState(0);
  const [totalReservations, setTotalReservations] = useState(0);
  const [score, setScore] = useState(0);
  // console.log({ refreshing });
  useEffect(() => {
    const getInfo = async () => {
      let res = await getOverviewInfo(token);
      setInfo(res);
    };
    if (token) {
      getInfo();
    }
  }, [token, refreshing]);

  useEffect(() => {
    if (info) {
      setTotalRequests(info.res.total_requests);
      setTotalReservations(info.res.total_reservations);
      setScore(totalRequests * totalReservations);
    }
  }, [info, totalRequests]);

  //=============Font==========
  const [loaded] = useFonts({
    montserratBold: require("../../../assets/fonts/Montserrat-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  //=================

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.upperTxtWrapper}>
          <Ionicons name="trophy" size={24} color={Colors.primary500} />
          <Text style={styles.upperTxt}>Wheels of Fortune</Text>
        </View>
        <View style={styles.circularOuterContainer}>
          <View style={[styles.circularContainer, styles.left]}>
            <CircularProgress
              value={totalRequests}
              initialValue={0}
              radius={60}
              duration={3000}
              progressValueColor={Colors.earning500}
              progressValueStyle={{
                fontWeight: "500",
                color: Colors.background500,
                fontFamily: "montserratBold",
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
              value={totalReservations}
              maxValue={180}
              radius={80}
              progressValueColor={Colors.earning500}
              activeStrokeColor={Colors.earning500}
              progressValueStyle={{
                fontWeight: "500",
                color: Colors.background500,
                fontFamily: "montserratBold",
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
          <Text style={styles.bigTitle}>{score}pts</Text>
          <Text style={styles.smallTitle}>
            1200 points till your next reward!
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
    // margin: 15,
    marginTop: 25,
    marginLeft: 10,
  },
  upperTxt: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "500",
    // color: Colors.background500,
    color: "#fff",
  },
  title: {
    color: "#fff",
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
    color: Colors.earning500,
    fontFamily: "montserratBold",
  },
  smallTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#fff",
  },
});
