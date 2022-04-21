export const getPokemonState = (state) => state?.pokemon || [];

export const getWildPokemon = (state) => getPokemonState(state)?.wildPokemon || [];