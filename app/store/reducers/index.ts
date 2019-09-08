import { combineReducers } from "redux";
import matchReducer from "../ducks/match";
import playerReducer from "../ducks/player";

const rootReducer = combineReducers({
  match: matchReducer,
  player: playerReducer,
});

export default rootReducer;
