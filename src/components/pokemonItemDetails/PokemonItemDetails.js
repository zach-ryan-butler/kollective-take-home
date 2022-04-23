import React, { useState } from "react";
import { useSelector } from "react-redux";

// material components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// redux selectors
import { getWildPokemonById } from "../../state/pokemon/pokemon.selectors";

// styles
import { styles } from "./PokemonItemDetails.styles.js";

export default function PokemonItemDetails({
  pokemonId,
  handleClickOpen,
  setPokemonId,
}) {
  const wildPokemon = useSelector((state) =>
    getWildPokemonById(state, pokemonId)
  );

  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  const handleCatchClick = () => {
    setPokemonId(wildPokemon.id);
    handleClickOpen();
  };

  return (
    <>
      <img
        src={wildPokemon?.sprites?.front_default}
        alt="pokemon"
        style={styles.image}
        onClick={handleClick}
      />
      <Box sx={styles.pokemonDetailsContainer}>
        <Typography
          variant="caption"
          component="p"
          sx={styles.pokemonDetailsId}
        >
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
                backgroundColor: (theme) =>
                  theme.palette.pokemonType[type.name],
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
      <Button
        disabled={isDisabled}
        variant="contained"
        sx={styles.button}
        onClick={handleCatchClick}
      >
        Catch!
      </Button>
    </>
  );
}
