import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// components
import CatchPokemonPage from "./pages/catchPokemonPage/CatchPokemonPage";
import CaughtPokemonPage from "./pages/caughtPokemonPage/CaughtPokemonPage";
import PokemonDetailsPage from "./pages/pokemonDetailsPage/PokemonDetailsPage";

function App() {
  return (
    <main style={{
      backgroundImage: `url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png)`,
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<CaughtPokemonPage />} />
          <Route path="catch" element={<CatchPokemonPage />} />
          <Route path="details/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
