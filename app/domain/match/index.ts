export interface Match {
  firstPlace: number;
  secondPlace: number;
  thirdPlace: number;
  fourthPlace: number;
}

export type placements =
  | "firstPlace"
  | "secondPlace"
  | "thirdPlace"
  | "fourthPlace";

const placementPoints: { [index: string]: number } = {
  firstPlace: 4,
  secondPlace: 3,
  thirdPlace: 2,
  fourthPlace: 1,
};

export const getPlacementPoints = (placement: placements): number =>
  placementPoints[placement];
