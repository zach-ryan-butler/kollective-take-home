import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// material components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// components
import PokemonItemDetailsTypes from "../pokemonItemDetailsTypes/PokemonItemDetailsTypes";

// pokemon redux
import {
  getWildPokemonById,
  getCaughtPokemonById,
} from "../../state/pokemon/pokemon.selectors";

// helpers
import { handleClick, handleCatchClick } from "./PokemonItemDetails.helpers";

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

  return (
    <>
      <img
        src={isWildPokemon?.sprites?.front_default}
        alt="pokemon"
        style={styles.image}
        onClick={() =>
          handleClick({
            isCatchPokemonPage,
            setIsDisabled,
            isDisabled,
            navigate,
            caughtPokemon,
          })
        }
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
      <PokemonItemDetailsTypes isWildPokemon={isWildPokemon} />
      {isCatchPokemonPage && (
        <Button
          disabled={isDisabled}
          variant="contained"
          sx={styles.button}
          onClick={() =>
            handleCatchClick({ setPokemonId, wildPokemon, handleClickOpen })
          }
        >
          Catch!
        </Button>
      )}
    </>
  );
}
