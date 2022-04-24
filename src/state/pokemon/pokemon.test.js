import pokemonReducer from "./pokemon.slice";

describe("pokemonReducer", () => {
  it("should return a new caught pokemon state given an add pokemon action", () => {
    const initialState = {
      wildPokemonById: {
        pokemonById: {},
        allPokemonIds: [],
      },
      caughtPokemonById: {
        pokemonById: {},
        allPokemonIds: [],
      },
      isLoading: false,
    };

    const action = {
      type: "pokemon/addCaughtPokemon",
      payload: { id: "10", name: "pikachu" },
    };

    const expectation = {
      wildPokemonById: {
        pokemonById: {},
        allPokemonIds: [],
      },
      caughtPokemonById: {
        pokemonById: {
          10: {
            id: "10",
            name: "pikachu",
          },
        },
        allPokemonIds: ["10"],
      },
      isLoading: false,
    };

    const actual = pokemonReducer(initialState, action);

    expect(actual).toEqual(expectation);
  });
});
