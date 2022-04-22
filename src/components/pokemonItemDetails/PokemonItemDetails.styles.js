export const styles = {
  image: {
    width: "100%",
    backgroundColor: "#EFEBE9",
    cursor: "pointer",
  },
  pokemonDetailsContainer: {
    paddingLeft: "1rem",
  },
  pokemonDetailsId: {
    color: (theme) => theme.palette.grey[500],
  },
  pokemonTypeContainer: {
    paddingLeft: "1rem",
    display: "flex",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    backgroundColor: "#ff867c",
    color: "white",
    "&:hover": {
      backgroundColor: "#b61827",
    },
  },
};
