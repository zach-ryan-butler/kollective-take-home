import React from "react";

// material components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// styles
import { styles } from "./PokemonDetailsTypes.styles";

export default function PokemonDetailsTypes({ pokemon }) {
  return (
    <Grid item xs={12} sx={styles.typeContainer}>
      <Typography variant="h5" sx={styles.typeTitle}>
        Type
      </Typography>
      <Grid item sx={styles.typeValueContainer}>
        {pokemon?.types?.map(({ type }, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.pokemonType[type.name],
                color: (theme) => theme.palette.common.white,
                width: "30%",
                display: "flex",
                height: "33px",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
                marginRight: ".5rem",
              }}
            >
              <Typography variant="caption" sx={styles.typeName}>
                {type.name}
              </Typography>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}
