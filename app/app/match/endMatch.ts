import { Match, getPlacementPoints, placements } from "domain/match";
import { Player, create, addPoints } from "domain/player";

interface Callbacks {
  onSuccess(players: Player[]): void;
  onError(error: Error): void;
}

export const endMatch = (
  match: Match,
  players: Player[],
  { onSuccess, onError }: Callbacks,
): void => {
  try {
    const updatedPlayers = Object.entries(match).map(
      ([placement, playerId]: [placements, number]): Player => {
        const currentPlayer =
          players.find((player: Player) => player.id === playerId) ||
          create(playerId);

        return addPoints(getPlacementPoints(placement), currentPlayer);
      },
    );
    onSuccess(updatedPlayers);
  } catch (e) {
    onError(new Error(e));
  }
};
