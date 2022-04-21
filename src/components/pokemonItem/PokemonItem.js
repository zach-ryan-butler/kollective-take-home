import React from "react";

// material components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// components
import PokemonItemDetails from "../pokemonItemDetails/PokemonItemDetails";

// helpers

export default function PokemonItem({ pokemon }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          animationDuration: ".2s",
          "@keyframes bounce": {
            "0%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-4px)" },
            "100%": { transform: "translateY(0) " },
          },
          "&:hover": {
            animationName: "bounce",
            animationTimingFunction: "linear",
          },
          width: 220,
        }}
      >
        <PokemonItemDetails pokemon={pokemon} />
      </Paper>
    </Grid>
  );
}
