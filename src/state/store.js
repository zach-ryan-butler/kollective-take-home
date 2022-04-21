import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon/pokemon.slice";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
