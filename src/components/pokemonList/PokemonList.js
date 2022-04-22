import React from "react";
import { useSelector } from "react-redux";

// material components
import Grid from "@mui/material/Grid";

// components
import PokemonItem from "../pokemonItem/PokemonItem";

// pokemon redux
import { getAllWildPokemonIds } from "../../state/pokemon/pokemon.selectors";

export default function PokemonList() {
  const wildPokemonIds = useSelector(getAllWildPokemonIds);

  return (
    <Grid container>
      {wildPokemonIds.map((pokemonId) => (
        <PokemonItem pokemonId={pokemonId} key={pokemonId} />
      ))}
    </Grid>
  );
}
