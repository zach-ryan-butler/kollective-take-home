import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// material components
import Grid from "@mui/material/Grid";

// components
import PokemonItem from "../pokemonItem/PokemonItem";

// pokemon redux
import {
  getAllWildPokemonIds,
  getAllCaughtPokemonIds,
} from "../../state/pokemon/pokemon.selectors";

export default function PokemonList({ handleClickOpen, setPokemonId }) {
  const wildPokemonIds = useSelector(getAllWildPokemonIds);
  const caughtPokemonIds = useSelector(getAllCaughtPokemonIds);
  const { pathname } = useLocation();

  if (pathname === "/catch") {
    return (
      <Grid container>
        {wildPokemonIds?.map((pokemonId) => (
          <PokemonItem
            pokemonId={pokemonId}
            key={pokemonId}
            handleClickOpen={handleClickOpen}
            setPokemonId={setPokemonId}
          />
        ))}
      </Grid>
    );
  }

  return (
    <Grid container>
      {caughtPokemonIds?.map((pokemonId) => (
        <PokemonItem pokemonId={pokemonId} key={pokemonId} />
      ))}
    </Grid>
  );
}
