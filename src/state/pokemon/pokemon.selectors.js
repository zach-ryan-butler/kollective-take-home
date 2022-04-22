export const getPokemonState = (state) => state?.pokemon || [];

export const getAllWildPokemonIds = (state) =>
  getPokemonState(state)?.wildPokemonById?.allPokemonIds || [];

export const getWildPokemonById = (state, id) =>
  getPokemonState(state)?.wildPokemonById?.pokemonById[id] || [];

export const getLoadingState = (state) => getPokemonState(state).isLoading
