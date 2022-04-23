export const handleClick = ({
  isCatchPokemonPage,
  setIsDisabled,
  isDisabled,
  navigate,
  caughtPokemon,
}) => {
  if (isCatchPokemonPage) {
    setIsDisabled(!isDisabled);
  } else {
    navigate(`/details/${caughtPokemon.id}`);
  }
};

export const handleCatchClick = ({
  setPokemonId,
  wildPokemon,
  handleClickOpen,
}) => {
  setPokemonId(wildPokemon.id);
  handleClickOpen();
};
