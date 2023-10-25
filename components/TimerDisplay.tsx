import React, { useContext } from "react";
import { Text } from "react-native";
import { TimerContext } from "../context/TimerContext";

export default function TimerDisplay() {
  const { state } = useContext(TimerContext) || { state: undefined };

  const time = state?.time || 0;
  const timeInMMSS = `${
    Math.floor(time / 60)
      .toString()
      .padStart(2, "0")
  }:${(time % 60).toString().padStart(2, "0")}`;

  return <Text>{timeInMMSS}</Text>;
}
