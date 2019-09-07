import { create, addPoints } from "./";

describe("player domain", () => {
  it("should create a player based on its id", () => {
    expect(create(2)).toEqual({ id: 2, points: 0 });
  });
  it("should add points to a player", () => {
    expect(addPoints(2, { id: 2, points: 2 })).toEqual({ id: 2, points: 4 });
  });
});
