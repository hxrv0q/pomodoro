import React, { useContext, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { TimerContext } from "../context/TimerContext";

export default function InputTime() {
  const [workTime, setWorkTime] = useState("");
  const [breakTime, setBreakTime] = useState("");

  const { dispatch } = useContext(TimerContext) || { dispatch: () => {} };

  const handleSetWorkTime = () => {
    const workTimeInSeconds = parseInt(workTime) * 60 || 0;
    dispatch({ type: "SET_WORK_TIME", payload: workTimeInSeconds });
    setWorkTime("");
  };

  const handleSetBreakTime = () => {
    const breakTimeInSeconds = parseInt(breakTime) * 60 || 0;
    dispatch({ type: "SET_BREAK_TIME", payload: breakTimeInSeconds });
    setBreakTime("");
  };

  return (
    <View>
      <TextInput
        placeholder="Work Minutes"
        value={workTime}
        onChangeText={setWorkTime}
        keyboardType="numeric"
      />
      <Button title="Set Work Time" onPress={handleSetWorkTime} />

      <TextInput
        placeholder="Break Minutes"
        value={breakTime}
        onChangeText={setBreakTime}
        keyboardType="numeric"
      />
      <Button title="Set Break Time" onPress={handleSetBreakTime} />
    </View>
  );
}
