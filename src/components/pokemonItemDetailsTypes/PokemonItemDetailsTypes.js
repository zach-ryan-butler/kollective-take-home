import React from "react";

// material components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// styles
import { styles } from "./PokemonItemDetailsTypes.styles";

export default function PokemonItemDetailsTypes({ isWildPokemon }) {
  return (
    <Box sx={styles.pokemonTypeContainer}>
      {isWildPokemon?.types?.map(({ type }, index) => {
        return (
          <Box
            key={index}
            sx={{
              backgroundColor: (theme) => theme.palette.pokemonType[type.name],
              color: (theme) => theme.palette.common.white,
              width: "4rem",
              borderRadius: "3px",
              textAlign: "center",
              marginRight: ".5rem",
            }}
          >
            <Typography variant="caption">{type.name}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
