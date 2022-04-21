export const getPokemonTypeToColor = (type) => {
    return {
      bug: "#729F3F",
      dragon: "#F16E57",
      fairy: "#FDB9E9",
      fire: "#FD7D24",
      ghost: "#7B62A3",
      ground: "#AB9842",
      normal: "#A4ACAF",
      psychic: "#F366B9",
      steel: "#9EB7B8",
      dark: "#707070",
      electric: "#EED535",
      fighting: "#D56723",
      flying: "#3DC7EF",
      grass: "#9BCC50",
      ice: "#51C4E7",
      poison: '#B97FC9',
      rock: '#A38C21',
      water: '#4592C4',
    }[type];
  };