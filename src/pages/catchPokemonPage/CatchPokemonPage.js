import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// material components
import Container from "@mui/material/Container";

// components
import PokemonList from "../../components/pokemonList/PokemonList";

// api-services
import { getRandomPokemon } from "../../services/pokemonApi";

// pokemon redux
import { addPokemon } from "../../state/pokemon/pokemon.slice";

export default function CatchPokemonPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    getRandomPokemon().then((pokemon) => dispatch(addPokemon(pokemon)));
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        minHeight: "100vh",
      }}
    >
      <PokemonList />
    </Container>
  );
}
