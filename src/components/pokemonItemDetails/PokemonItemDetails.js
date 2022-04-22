import React from "react";
import { useSelector } from "react-redux";

// material components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// helpers
import { getPokemonTypeToColor } from "./PokemonItemDetails.helpers";

// redux selectors
import { getWildPokemonById } from "../../state/pokemon/pokemon.selectors";

// styles
import { styles } from "./PokemonItemDetails.styles.js";

export default function PokemonItemDetails({ pokemonId }) {
  const wildPokemon = useSelector((state) =>
    getWildPokemonById(state, pokemonId)
  );

  return (
    <>
      <img
        src={wildPokemon?.sprites?.front_default}
        alt="pokemon"
        style={styles.image}
      />
      <Box sx={styles.pokemonDetailsContainer}>
        <Typography variant="caption" sx={styles.pokemonDetailsId}>
          #{wildPokemon.id}
        </Typography>
        <Typography variant="h6">{wildPokemon.name}</Typography>
      </Box>
      <Box sx={styles.pokemonTypeContainer}>
        {wildPokemon?.types.map(({ type }, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundColor: getPokemonTypeToColor(type.name),
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
      <Button variant="contained" sx={styles.button}>
        Catch!
      </Button>
    </>
  );
}
