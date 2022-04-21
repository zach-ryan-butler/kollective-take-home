import React from "react";

// material components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function PokemonItem() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={0} variant='outlined'>PokemonItem</Paper>
    </Grid>
  );
}
