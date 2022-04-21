import React from "react";

// material components
import Grid from "@mui/material/Grid";

// components
import PokemonItem from "../pokemonItem/PokemonItem";

export default function PokemonList() {
  return (
    <Grid container spacing={2}>
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
    </Grid>
  );
}
