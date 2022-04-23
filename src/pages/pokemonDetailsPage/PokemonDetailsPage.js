import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// material components
import Container from "@mui/material/Container";

// pokemon redux
import { getIsAllCaughtPokemonIdsEmpty } from "../../state/pokemon/pokemon.selectors";
import { addCaughtPokemon } from "../../state/pokemon/pokemon.slice";

// local storage helpers
import { getPokemonFromLocalStorage } from "../../data/localStorage.helpers";

// components
import PokemonDetails from "../../components/pokemonDetails/PokemonDetails";

// styles
import { styles } from './PokemonDetailsPage.styles';

export default function PokemonDetailsPage() {
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

  return (
    <Container
      maxWidth="lg"
      sx={styles.container}
    >
      <PokemonDetails />
    </Container>
  );
}
