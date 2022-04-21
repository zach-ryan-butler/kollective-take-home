import React from "react";

// material components
import Container from "@mui/material/Container";

// components
import PokemonList from "../../components/pokemonList/PokemonList";

export default function CatchPokemonPage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        minHeight: "100vh",
      }}
    >
      <PokemonList />
    </Container>
  );
}
