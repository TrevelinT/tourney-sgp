import reducer from "./base";

describe("Base reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined)).toEqual({ key: null });
  });
});
