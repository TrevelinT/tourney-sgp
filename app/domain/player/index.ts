export interface Player {
  id: number;
  points: number;
}

export const addPoints = (points: number, player: Player): Player => ({
  ...player,
  points: player.points += points,
});

export const create = (id: number): Player => ({
  id,
  points: 0,
});
