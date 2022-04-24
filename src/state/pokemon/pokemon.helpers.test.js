import {
  getIndexPokemonById,
  getPokemonIds,
  getNormalizedPokemonData,
} from "./pokemon.helpers";

describe("pokemon helper functions", () => {
  it("should key pokemon by id", () => {
    const data = [
      {
        id: "10",
        name: "pikachu",
      },
      {
        id: "20",
        name: "meowth",
      },
      {
        id: "30",
        name: "odish",
      },
      {
        id: "40",
        name: "zubat",
      },
    ];

    const expected = {
      10: {
        id: "10",
        name: "pikachu",
      },
      20: {
        id: "20",
        name: "meowth",
      },
      30: {
        id: "30",
        name: "odish",
      },
      40: {
        id: "40",
        name: "zubat",
      },
    };

    const actual = getIndexPokemonById(data);

    expect(actual).toEqual(expected);
  });

  it("creates an array of reference pokemon ids", () => {
    const data = [
      {
        id: "10",
        name: "pikachu",
      },
      {
        id: "20",
        name: "meowth",
      },
      {
        id: "30",
        name: "odish",
      },
      {
        id: "40",
        name: "zubat",
      },
    ];

    const expected = ["10", "20", "30", "40"];
    
    const actual = getPokemonIds(data);

    expect(actual).toEqual(expected);
  });

  it("normalizes incoming pokemon data", () => {
    const data = [
      {
        id: "10",
        name: "pikachu",
      },
      {
        id: "20",
        name: "meowth",
      },
      {
        id: "30",
        name: "odish",
      },
      {
        id: "40",
        name: "zubat",
      },
    ];

    const expected = {
      pokemonById: {
        10: { id: "10", name: "pikachu" },
        20: { id: "20", name: "meowth" },
        30: { id: "30", name: "odish" },
        40: { id: "40", name: "zubat" },
      },
      allPokemonIds: ["10", "20", "30", "40"],
    };

    const actual = getNormalizedPokemonData(data);
    
    expect(actual).toEqual(expected);
  });
});
