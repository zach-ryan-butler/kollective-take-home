import { getTenRandomNumbers } from "./pokemonApi.helpers";

describe("getTenRandomNumbers", () => {
  it("should return 10 random integers between one and the max", () => {
    const max = 20;

    const expected = [3, 4, 2, 5, 12, 6, 17, 5, 4, 11];

    const actual = getTenRandomNumbers(max);

    expect(actual.length).toEqual(expected.length);
  });
});
