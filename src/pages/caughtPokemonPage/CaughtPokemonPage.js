import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// material components
import Container from "@mui/material/Container";

// components
import PokemonList from "../../components/pokemonList/PokemonList";

// styles
import { styles } from "./CaughtPokemonPage.styles";

// pokemon redux
import { addCaughtPokemon } from "../../state/pokemon/pokemon.slice";
import { getIsAllCaughtPokemonIdsEmpty } from "../../state/pokemon/pokemon.selectors";

// local storage helpers
import { getPokemonFromLocalStorage } from "../../data/localStorage.helpers";
import { Typography } from "@mui/material";

export default function CaughtPokemonPage() {
  const isCaughtPokemonIdsEmpty = useSelector(getIsAllCaughtPokemonIdsEmpty);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCaughtPokemonIdsEmpty) {
      const pokemonFromLocalStorage = getPokemonFromLocalStorage();
      pokemonFromLocalStorage.forEach((pokemon) =>
        dispatch(addCaughtPokemon(pokemon))
      );
    }
  }, [dispatch, isCaughtPokemonIdsEmpty]);

  if (isCaughtPokemonIdsEmpty) {
    return (
      <Container maxWidth="lg" sx={styles.container}>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Click the link in the top right to go catch Pokemon!
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <PokemonList />
    </Container>
  );
}
