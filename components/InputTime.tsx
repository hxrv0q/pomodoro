import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TimerContext } from "../context/TimerContext";

export default function InputTime() {
  const [workMinutes, setWorkMinutes] = useState("");
  const [workSeconds, setWorkSeconds] = useState("");
  const [breakMinutes, setBreakMinutes] = useState("");
  const [breakSeconds, setBreakSeconds] = useState("");

  const { dispatch } = useContext(TimerContext) || { dispatch: () => {} };

  const handleSetWorkTime = () => {
    const workTimeInSeconds = (parseInt(workMinutes) * 60 || 0) +
      (parseInt(workSeconds) || 0);
    dispatch({ type: "SET_WORK_TIME", payload: workTimeInSeconds });
    setWorkMinutes("");
    setWorkSeconds("");
  };

  const handleSetBreakTime = () => {
    const breakTimeInSeconds = (parseInt(breakMinutes) * 60 || 0) +
      (parseInt(breakSeconds) || 0);
    dispatch({ type: "SET_BREAK_TIME", payload: breakTimeInSeconds });
    setBreakMinutes("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeInputContainer}>
        <TextInput
          style={[styles.input, styles.minuteInput]}
          placeholder="Work Min"
          value={workMinutes}
          onChangeText={setWorkMinutes}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.secondInput]}
          placeholder="Work Sec"
          value={workSeconds}
          onChangeText={setWorkSeconds}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSetWorkTime}>
        <Text style={styles.buttonText}>Set Work Time</Text>
      </TouchableOpacity>

      <View style={styles.timeInputContainer}>
        <TextInput
          style={[styles.input, styles.minuteInput]}
          placeholder="Break Min"
          value={breakMinutes}
          onChangeText={setBreakMinutes}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.secondInput]}
          placeholder="Break Sec"
          value={breakSeconds}
          onChangeText={setBreakSeconds}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSetBreakTime}>
        <Text style={styles.buttonText}>Set Break Time</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  timeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "transparent",
    borderBottomColor: "#D1C4E9",
    borderWidth: 1,
    flex: 1,
  },
  minuteInput: {
    marginRight: 10,
  },
  secondInput: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#6200EA",
    padding: 12,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
