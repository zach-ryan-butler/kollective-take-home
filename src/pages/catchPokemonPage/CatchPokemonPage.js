import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// material components
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// components
import PokemonList from "../../components/pokemonList/PokemonList";

// pokemon redux
import { fetchRandomPokemon } from "../../state/pokemon/pokemon.slice";
import { getLoadingState } from "../../state/pokemon/pokemon.selectors";

// styles
import { styles } from "./CatchPokemonPage.styles";

export default function CatchPokemonPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingState);

  useEffect(() => {
    dispatch(fetchRandomPokemon());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={styles.container}>
        <Box sx={styles.box}>
          <CircularProgress size={100} />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <PokemonList />
    </Container>
  );
}
