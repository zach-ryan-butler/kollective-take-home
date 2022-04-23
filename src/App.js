import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// components
import CatchPokemonPage from "./pages/catchPokemonPage/CatchPokemonPage";
import CaughtPokemonPage from "./pages/caughtPokemonPage/CaughtPokemonPage";
import PokemonDetailsPage from "./pages/pokemonDetailsPage/PokemonDetailsPage";
import Header from "./components/header/Header";

// material
import { ThemeProvider } from "@mui/material/styles";

// themes
import { theme } from './themes/mainTheme';

// styles
import { styles } from "./App.styles";

function App() {

  return (
    <main style={styles.main}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<CaughtPokemonPage />} />
            <Route path="catch" element={<CatchPokemonPage />} />
            <Route path="details/:id" element={<PokemonDetailsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </main>
  );
}

export default App;
