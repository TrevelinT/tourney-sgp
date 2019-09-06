import { combineReducers } from "redux";
import baseReducer from "../ducks/base";

const rootReducer = combineReducers({
  base: baseReducer,
});

export default rootReducer;
