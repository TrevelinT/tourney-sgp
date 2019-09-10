import { cps, select, put, takeLatest } from "redux-saga/effects";
import { Match } from "domain/match";
import { Player } from "domain/player";
import { MATCH } from "../actionTypes";
import { operations as playerOperations } from "../player/player";
import { endMatch as endMatchUseCase } from "app/match/endMatch";
import { playerSelectors } from "../player";

/* eslint-disable @typescript-eslint/no-explicit-any */
function applyNodeCallbacks<T extends (...arg: any[]) => any>(fn: T) {
  return (...arg: Parameters<T>): void => {
    const fnArgs = arg;
    const callback = arg.pop();
    const callbacks = {
      onSuccess: (data: any): void => {
        callback(null, data);
      },
      onError: (error: any): void => {
        callback(error);
      },
    };

    return fn(...fnArgs, callbacks);
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const matchStatuses = {
  START: "START",
  FINISHING: "FINISHING",
  FINISHED: "FINISHED",
};

type MatchStatus = keyof typeof matchStatuses;

interface MatchState {
  status: string;
}

interface EndMatch {
  type: typeof MATCH.END;
  payload: {
    match: Match;
  };
}

export type MatchActionTypes = EndMatch;

const endMatch = (match: Match): MatchActionTypes => ({
  type: MATCH.END,
  payload: {
    match,
  },
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function* endMatchSaga({ payload: { match } }: EndMatch) {
  const playerEntities = yield select(playerSelectors.getPlayerEntity);

  const players: Player[] = Object.values(match)
    .map((id: number): Player => playerEntities[id])
    .filter((player: Player | undefined) => player != null);

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedPlayers: Player[] = yield (cps as any)(
      applyNodeCallbacks(endMatchUseCase),
      match,
      players,
    );

    yield put(playerOperations.updatePlayer(updatedPlayers));
  } catch (e) {
    console.log(e);
  }
}

function* watchEndMatchSaga(): Generator {
  yield takeLatest(MATCH.END, endMatchSaga);
}

export const operations = {
  watchEndMatchSaga,
  endMatch,
};

const initialState = {
  status: matchStatuses.START,
};

export const reducer = (
  state = initialState,
  action: MatchActionTypes,
): MatchState => {
  switch (action.type) {
    case MATCH.END:
      return {
        status: matchStatuses.FINISHED,
      };
    default:
      return state;
  }
};
