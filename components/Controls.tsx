import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { TimerContext } from "../context/TimerContext";

export default function Controls() {
  const { state, dispatch } = useContext(TimerContext) ||
    { state: undefined, dispatch: () => {} };

  React.useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (!state?.paused) {
      timer = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);

      return () => {
        if (timer) clearInterval(timer);
      };
    }
  }, [state?.paused, state?.time]);

  React.useEffect(() => {
    if (state?.time === 0) {
      Vibration.vibrate();
    }
  }, [state?.time]);

  return (
    <View style={styles.controlsContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "TOGGLE_PAUSE" })}
      >
        <Text style={styles.buttonText}>
          {state?.paused ? "Start" : "Pause"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "RESET" })}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "SKIP" })}
      >
        <Text style={styles.buttonText}>{state?.work ? "Work" : "Break"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#6200EA",
    padding: 12,
    margin: 10,
    borderRadius: 4,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
