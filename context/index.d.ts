interface State {
  paused: boolean;
  time: number;
  workTime: number;
  breakTime: number;
  work: boolean;
}

type Action =
  | { type: "RESET" }
  | { type: "TOGGLE_PAUSE" }
  | {
    type: "SET_WORK_TIME";
    payload: number;
  }
  | { type: "SET_BREAK_TIME"; payload: number }
  | { type: "TICK" }
  | { type: "SKIP" };
