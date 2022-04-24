import {
  getPokemonState,
  getAllWildPokemonIds,
  getWildPokemonById,
  getAllCaughtPokemonIds,
  getCaughtPokemonById,
  getIsAllCaughtPokemonIdsEmpty,
  getLoadingState,
} from "./pokemon.selectors";

describe("gettingPokemonState", () => {
  it("should get root pokemon state or return a default", () => {
    const initialState = {
      pokemon: {
        wildPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        caughtPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        isLoading: false,
      },
    };

    const expected = {
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

    const actual = getPokemonState(initialState);

    expect(actual).toEqual(expected);
    expect(getPokemonState()).toEqual([]);
  });

  it("should get all wild pokemon ids or return a default", () => {
    const initialState = {
      pokemon: {
        wildPokemonById: {
          pokemonById: {},
          allPokemonIds: [10, 50, 100],
        },
        caughtPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        isLoading: false,
      },
    };

    const expected = [10, 50, 100];

    const actual = getAllWildPokemonIds(initialState);

    expect(actual).toEqual(expected);
    expect(getAllWildPokemonIds()).toEqual([]);
  });

  it("should get a wild pokemon by id or return a default", () => {
    const initialState = {
      pokemon: {
        wildPokemonById: {
          pokemonById: {
            10: { name: "pikachu" },
            20: { name: "meowth" },
          },
          allPokemonIds: [],
        },
        caughtPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        isLoading: false,
      },
    };

    const expected = { name: "pikachu" };
    const id = "10";
    const actual = getWildPokemonById(initialState, id);

    expect(actual).toEqual(expected);
    expect(getWildPokemonById()).toEqual({});
  });

  it("should get all caught pokemon ids or return a default", () => {
    const initialState = {
      pokemon: {
        wildPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        caughtPokemonById: {
          pokemonById: {},
          allPokemonIds: [10, 50, 100],
        },
        isLoading: false,
      },
    };

    const expected = [10, 50, 100];
    const actual = getAllCaughtPokemonIds(initialState);

    expect(actual).toEqual(expected);
    expect(getAllCaughtPokemonIds()).toEqual([]);
  });

  it("should get a caught pokemon by id or return a default", () => {
    const initialState = {
      pokemon: {
        wildPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        caughtPokemonById: {
          pokemonById: {
            10: { name: "pikachu" },
            20: { name: "meowth" },
          },
          allPokemonIds: [],
        },
        isLoading: false,
      },
    };

    const expected = { name: "meowth" };
    const id = "20";
    const actual = getCaughtPokemonById(initialState, id);

    expect(actual).toEqual(expected);
    expect(getCaughtPokemonById()).toEqual({});
  });

  it("should return false if there is caught pokemon and true if there is not", () => {
    const initialState = {
      pokemon: {
        wildPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        caughtPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        isLoading: false,
      },
    };

    const expected = true;
    const actual = getIsAllCaughtPokemonIdsEmpty(initialState);

    expect(actual).toEqual(expected);
  });

  it("should return loading state", () => {
    const initialState = {
      pokemon: {
        wildPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        caughtPokemonById: {
          pokemonById: {},
          allPokemonIds: [],
        },
        isLoading: false,
      },
    };

    const expected = false;
    const actual = getLoadingState(initialState);

    expect(actual).toEqual(expected);
  });
});
