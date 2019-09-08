import { all } from "redux-saga/effects";
import { operations } from "./match/match";

export default function* rootSaga(): Generator {
  return yield all([operations.watchEndMatchSaga()]);
}
