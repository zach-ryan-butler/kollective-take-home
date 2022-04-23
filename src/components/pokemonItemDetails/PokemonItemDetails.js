import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// material components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// pokemon redux
import {
  getWildPokemonById,
  getCaughtPokemonById,
} from "../../state/pokemon/pokemon.selectors";

// styles
import { styles } from "./PokemonItemDetails.styles.js";

export default function PokemonItemDetails({
  pokemonId,
  handleClickOpen,
  setPokemonId,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const wildPokemon = useSelector((state) =>
  getWildPokemonById(state, pokemonId)
  );
  const caughtPokemon = useSelector((state) =>
  getCaughtPokemonById(state, pokemonId)
  );
  const isCatchPokemonPage = pathname === "/catch" ? true : false;
  const isWildPokemon = isCatchPokemonPage ? wildPokemon : caughtPokemon;

  const handleClick = () => {
    if (isCatchPokemonPage) {
      setIsDisabled(!isDisabled);
    } else {
      navigate(`/details/${caughtPokemon.id}`);
    }
  };

  const handleCatchClick = () => {
    setPokemonId(wildPokemon.id);
    handleClickOpen();
  };

  return (
    <>
      <img
        src={isWildPokemon?.sprites?.front_default}
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
          #{isWildPokemon?.id}
        </Typography>
        <Typography variant="h6">{isWildPokemon.name}</Typography>
      </Box>
      <Box sx={styles.pokemonTypeContainer}>
        {isWildPokemon?.types?.map(({ type }, index) => {
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
      {isCatchPokemonPage && (
        <Button
          disabled={isDisabled}
          variant="contained"
          sx={styles.button}
          onClick={handleCatchClick}
        >
          Catch!
        </Button>
      )}
    </>
  );
}
