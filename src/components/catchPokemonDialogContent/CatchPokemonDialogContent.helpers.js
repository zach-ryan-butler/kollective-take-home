// pokemon redux
import { addCaughtPokemon } from "../../state/pokemon/pokemon.slice";

// local storage helpers
import { setPokemonInLocalStorage } from "../../data/localStorage.helpers";

export const handleSubmit = ({
  event,
  nickname,
  dispatch,
  selectedPokemon,
  handleClose,
  setNickname,
}) => {
  event.preventDefault();

  if (nickname === "") {
    dispatch(addCaughtPokemon(selectedPokemon));
    setPokemonInLocalStorage(selectedPokemon);
    handleClose();
    return;
  }

  const pokemonWithNickname = {
    ...selectedPokemon,
    name: nickname,
  };

  dispatch(addCaughtPokemon(pokemonWithNickname));
  setPokemonInLocalStorage(pokemonWithNickname);
  setNickname("");
  handleClose();
};

export const handleNicknameChange = ({ event, setNickname }) => {
  setNickname(event.target.value);
};

export const handleDialogClose = ({ setNickname, handleClose }) => {
  setNickname("");
  handleClose();
};
