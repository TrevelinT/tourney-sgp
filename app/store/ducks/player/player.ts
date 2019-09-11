import { PLAYER, GLOBAL } from "../actionTypes";
import { Player } from "domain/player";
import { GlobalActionTypes } from "../global/global";

export interface PlayerEntities {
  [index: number]: Player;
}

interface UpdatePlayer {
  type: typeof PLAYER.UPDATE;
  payload: {
    players: Player[];
  };
}

type PlayerState = PlayerEntities;

type PlayerActionTypes = UpdatePlayer;

const updatePlayer = (players: Player[]): PlayerActionTypes => ({
  type: PLAYER.UPDATE,
  payload: {
    players,
  },
});

export const operations = {
  updatePlayer,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPlayers = (state: any): Player[] => Object.values(state.player);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPlayerEntity = (state: any): PlayerEntities => state.player;

export const selectors = {
  getPlayers,
  getPlayerEntity,
};

const initialState: PlayerState = {};

export const reducer = (
  state = initialState,
  action: PlayerActionTypes | GlobalActionTypes,
): PlayerState => {
  switch (action.type) {
    case PLAYER.UPDATE:
      return {
        ...state,
        ...((action as PlayerActionTypes).payload.players as Player[]).reduce(
          (acc, value) => ({ ...acc, [value.id]: value }),
          {},
        ),
      };
    case GLOBAL.RESET:
      return initialState;
    default:
      return state;
  }
};
