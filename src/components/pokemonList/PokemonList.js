import React from "react";
import { useSelector } from "react-redux";

// material components
import Grid from "@mui/material/Grid";

// components
import PokemonItem from "../pokemonItem/PokemonItem";

// redux selectors
import { getWildPokemon } from "../../state/pokemon/pokemon.selectors";

export default function PokemonList() {
  const wildPokemonState = useSelector(getWildPokemon);

  return (
    <Grid container>
      {wildPokemonState.map((pokemon, index) => (
        <PokemonItem pokemon={pokemon} key={pokemon?.id} />
      ))}
    </Grid>
  );
}
