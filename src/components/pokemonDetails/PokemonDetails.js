import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// material components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// components
import PokemonDetailsStats from "../pokemonDetailsStats/PokemonDetailsStats";
import PokemonDetailsTypes from "../pokemonDetailsTypes/PokemonDetailsTypes";

// pokemon redux
import { getCaughtPokemonById } from "../../state/pokemon/pokemon.selectors";

// styles
import { styles } from "./PokemonDetails.styles";

export default function PokemonDetails() {
  const { id } = useParams();
  const pokemon = useSelector((state) => getCaughtPokemonById(state, id));
  const isNotCaughtPokemon = Object.keys(pokemon).length === 0;

  if (isNotCaughtPokemon) {
    return <Grid container sx={styles.gridContainer}></Grid>;
  }

  return (
    <Grid container sx={styles.gridContainer}>
      <Grid item xs={12} sx={styles.titleContainer}>
        <Typography variant="h3" component="h1" sx={styles.leftTitle}>
          {pokemon.name}
        </Typography>
        <Typography variant="h3" component="h1" sx={styles.rightTitle}>
          #{pokemon.id}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={styles.detailsContainer}>
        <img
          style={styles.image}
          src={pokemon?.sprites?.front_default}
          alt="pokemon"
        />
      </Grid>

      <Grid item container xs={12} md={6} sx={styles.statsAndTypesContainer}>
        <PokemonDetailsStats pokemon={pokemon} />
        <PokemonDetailsTypes pokemon={pokemon} />
      </Grid>
    </Grid>
  );
}
