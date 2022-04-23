export const getPokemonState = (state) => state?.pokemon || [];

export const getAllWildPokemonIds = (state) =>
  getPokemonState(state)?.wildPokemonById?.allPokemonIds || [];

export const getWildPokemonById = (state, id) =>
  getPokemonState(state)?.wildPokemonById?.pokemonById[id] || {};

export const getAllCaughtPokemonIds = (state) =>
  getPokemonState(state)?.caughtPokemonById?.allPokemonIds || [];

export const getCaughtPokemonById = (state, id) =>
  getPokemonState(state)?.caughtPokemonById?.pokemonById[id] || {};

export const getIsAllCaughtPokemonIdsEmpty = (state) =>
  !getAllCaughtPokemonIds(state).length;

export const getLoadingState = (state) => getPokemonState(state).isLoading;
