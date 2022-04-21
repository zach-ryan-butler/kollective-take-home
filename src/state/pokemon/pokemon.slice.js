import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wildPokemon: [],
    caughtPokemon: [],
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.wildPokemon = action.payload;
        },
        addCaughtPokemon: (state, action) => {
            state.caughtPokemon = [...state.caughtPokemon, action.payload];
        },
    },
    extraReducers: {},
});

export const { addPokemon, addCaughtPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;