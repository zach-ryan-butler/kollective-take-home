import { getTenRandomNumbers } from "./pokemonApi.helpers";

describe("getTenRandomNumbers", () => {
  it("should return 10 random integers between one and the max", () => {
    const max = 20;

    const expected = [3, 4, 2, 5, 12, 6, 17, 5, 4, 11];

    const actual = getTenRandomNumbers(max);

    expect(actual.length).toEqual(expected.length);
  });

  it("doesnt repeat numbers", () => {
    jest
      .spyOn(global.Math, "random")
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 1);

    const max = 20;

    const actual = getTenRandomNumbers(max);

    // first entry is mocked value
    expect(actual[0]).toEqual(21);
    // we try to force a duplicate but number is unique
    expect(actual[1]).not.toEqual(21);
    expect(actual.length).toEqual(10);
  });

  it("works if no max is provided", () => {
    const actual = getTenRandomNumbers();

    expect(actual).toEqual([]);
  });
});
