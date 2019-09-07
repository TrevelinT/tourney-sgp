import { getPlacementPoints } from "./";

describe("match value object", () => {
  it("should return the points for the provided placement", () => {
    expect(getPlacementPoints("firstPlace")).toEqual(4);
  });
});
