export const setPokemonInLocalStorage = pokemon => {
    let localStoragePokemon = [];
    localStoragePokemon = JSON.parse(localStorage.getItem('session')) || [];
    localStoragePokemon.push(pokemon);
    localStorage.setItem('session', JSON.stringify(localStoragePokemon));
};

export const getPokemonFromLocalStorage = () => {
    const pokemon = JSON.parse(localStorage.getItem('session')) || [];
    return pokemon;
};