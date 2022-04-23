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
  button: {
    width: "100%",
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.common.white,
    "&:hover": {
      backgroundColor: (theme) => theme.palette.primary.dark,
    },
  },
};
