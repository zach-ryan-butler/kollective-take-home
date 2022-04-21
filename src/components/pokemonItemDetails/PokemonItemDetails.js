import React from 'react'

// material components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// helpers
import { getPokemonTypeToColor } from './PokemonItemDetails.helpers';

export default function PokemonItemDetails({ pokemon }) {
  return (
    <>
        <img
          src={pokemon?.sprites?.front_default}
          alt="pokemon"
          style={{ width: "100%", backgroundColor: "#EFEBE9" }}
        />
        <Box sx={{ paddingLeft: "1rem" }}>
          <Typography
            variant="caption"
            sx={{ color: (theme) => theme.palette.grey[500] }}
          >
            #{pokemon.id}
          </Typography>
          <Typography variant="h6">{pokemon.name}</Typography>
        </Box>
        <Box
          sx={{ paddingLeft: "1rem", display: "flex", marginBottom: "10px" }}
        >
          {pokemon?.types.map(({ type }, index) => {
            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: getPokemonTypeToColor(type.name),
                  color: (theme) => theme.palette.common.white,
                  width: "4rem",
                  borderRadius: "3px",
                  textAlign: "center",
                  marginRight: ".5rem",
                }}
              >
                <Typography variant="caption">{type.name}</Typography>
              </Box>
            );
          })}
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#ff867c",
            color: "white",
            "&:hover": {
              backgroundColor: "#b61827",
            },
          }}
        >
          Catch!
        </Button>
    </>
  )
}