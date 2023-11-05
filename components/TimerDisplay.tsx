import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TimerContext } from "../context/TimerContext";

export default function TimerDisplay() {
  const { state } = useContext(TimerContext) || { state: undefined };

  const isWorkTime = state?.work;
  const totalDuration = state?.work ? state?.workTime : state?.breakTime || 0;
  const time = state?.time || 0;
  const percentage = (time / totalDuration) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={[styles.progressCircle, { height: `${percentage}%` }]} />
        <Text style={styles.timeText}>
          {Math.floor(time / 60).toString().padStart(2, "0")}:
          {(time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
      <Text style={styles.statusText}>
        {isWorkTime ? "Work Time" : "Break Time"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderWidth: 10 / 2,
    borderColor: "#6200EA",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  progressCircle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#E0E0E0",
  },
  timeText: {
    fontSize: 30,
    fontWeight: "bold",
    zIndex: 1,
  },
  statusText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#6200EA"
  }
});
