export function timerReducer(state: State, action: Action): State {
  switch (action.type) {
    case "RESET":
      return { ...state, paused: true, time: state.work ? state.workTime : state.breakTime }

    case "TOGGLE_PAUSE":
      return { ...state, paused: !state.paused };

    case "TICK": {
      const next_time = state.time - 1;

      if (next_time <= 0) {
        return {
          ...state,
          work: !state.work,
          time: state.work ? state.breakTime : state.workTime,
        };
      }

      return { ...state, time: next_time };
    }

    case "SET_WORK_TIME":
      return {
        ...state,
        workTime: action.payload,
        time: state.work ? action.payload : state.time,
      };

    case "SET_BREAK_TIME":
      return {
        ...state,
        breakTime: action.payload,
        time: state.work ? state.time : action.payload,
      };

    case "SKIP":
      return {
        ...state,
        work: !state.work,
        time: state.work ? state.breakTime : state.workTime,
      };

    default:
      return state;
  }
}
