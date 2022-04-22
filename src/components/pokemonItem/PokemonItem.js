import React from "react";

// material components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// components
import PokemonItemDetails from "../pokemonItemDetails/PokemonItemDetails";

// styles
import { styles } from "./PokemonItem.styles";

export default function PokemonItem({ pokemonId }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={styles.gridItem}>
      <Paper elevation={0} sx={styles.paper}>
        <PokemonItemDetails pokemonId={pokemonId} />
      </Paper>
    </Grid>
  );
}
