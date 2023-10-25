import React, { createContext, ReactNode, useReducer } from "react";
import { timerReducer } from "./reducer";

export interface TimerContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const TimerContext = createContext<TimerContextType | undefined>(
  undefined,
);

const initialState: State = {
  paused: true,
  time: 25 * 60,
  workTime: 25 * 60,
  breakTime: 5 * 60,
  work: true,
};

interface TimerProviderProps {
  children: ReactNode;
}

export function TimerProvider({ children }: TimerProviderProps) {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
}
