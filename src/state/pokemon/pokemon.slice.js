import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRandomPokemon } from "../../services/pokemonApi";
import { getNormalizedPokemonData } from "./pokemon.helpers";

export const fetchRandomPokemon = createAsyncThunk(
  "pokemon/fetchRandomPokemon",
  async () => {
    const response = await getRandomPokemon();
    return response;
  }
);

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

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addCaughtPokemon: (state, action) => {
      state.caughtPokemonById.pokemonById[action.payload.id] = action.payload;
      state.caughtPokemonById.allPokemonIds.push(action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomPokemon.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRandomPokemon.fulfilled, (state, action) => {
      const normalizedPokemonData = getNormalizedPokemonData(action.payload);
      state.wildPokemonById = normalizedPokemonData;
      state.isLoading = false;
    });
    builder.addCase(fetchRandomPokemon.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addCaughtPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
