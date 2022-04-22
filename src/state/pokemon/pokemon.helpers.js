export const getIndexPokemonById = (remoteData) => {
  return remoteData.reduce((pokemonById, pokemon) => {
    return {
      ...pokemonById,
      [pokemon.id]: {
        ...pokemon,
      },
    };
  }, {});
};

export const getPokemonIds = (remoteData) => {
  return remoteData.map((pokemon) => pokemon.id);
};

export const getNormalizedPokemonData = (remoteData) => {
  return {
    pokemonById: getIndexPokemonById(remoteData),
    allPokemonIds: getPokemonIds(remoteData),
  };
};
