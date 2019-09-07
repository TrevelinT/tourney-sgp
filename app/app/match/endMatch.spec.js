import { endMatch } from "./endMatch";

describe("endMatch use case", () => {
  describe("onSuccess callback", () => {
    it("should create players that doesn't exist and return them", () => {
      const match = {
        firstPlace: 6,
        secondPlace: 13,
        thirdPlace: 7,
        fourthPlace: 2,
      };

      const onSuccess = jest.fn();
      const onError = jest.fn();

      const expectedResult = [
        { id: 6, points: 4 },
        { id: 13, points: 3 },
        { id: 7, points: 2 },
        { id: 2, points: 1 },
      ];

      endMatch(match, [], { onSuccess, onError });
      expect(onSuccess).toHaveBeenCalledWith(expectedResult);
    });
    it("should update players pontuation and return the players", () => {
      const match = {
        firstPlace: 6,
        secondPlace: 13,
        thirdPlace: 7,
        fourthPlace: 2,
      };

      const players = [
        { id: 6, points: 2 },
        { id: 13, points: 3 },
        { id: 7, points: 2 },
        { id: 2, points: 1 },
      ];

      const onSuccess = jest.fn();
      const onError = jest.fn();

      const expectedResult = [
        { id: 6, points: 6 },
        { id: 13, points: 6 },
        { id: 7, points: 4 },
        { id: 2, points: 2 },
      ];

      endMatch(match, players, { onSuccess, onError });
      expect(onSuccess).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe("onError callback", () => {
    it("should fire the function whenever an error occurs", () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();

      endMatch(null, [], { onSuccess, onError });
      expect(onError).toHaveBeenCalled();
      expect(onError.mock.calls[0][0]).toBeInstanceOf(Error);
    });
  });
});
