import { getTenRandomNumbers } from './pokemonApi.helpers';

export const getPokemonCount = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=0');
        const response = await res.json();
        return response?.count;

    } catch (error) {
        throw new Error(error);
    }
};

export const getPokemonById = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const response = await res.json();
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export const getRandomPokemon = async () => {
    const maxPokemonCount = await getPokemonCount();
    const tenRandomPokemonIds = getTenRandomNumbers(maxPokemonCount);
    return Promise.all(tenRandomPokemonIds.map(pokemonId => getPokemonById(pokemonId)))
}