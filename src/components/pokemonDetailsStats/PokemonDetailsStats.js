import React from "react";

// material components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// styles
import { styles } from "./PokemonDetailsStats.styles";

export default function PokemonDetailsStats({ pokemon }) {
  return (
    <Grid item container xs={12} sx={styles.statsContainer}>
      <Grid item xs={6} sx={styles.statItem}>
        <Typography sx={styles.statType}>Height</Typography>
        <Typography sx={styles.statValue}>{pokemon?.height}</Typography>
      </Grid>
      <Grid item xs={6} sx={styles.statItem}>
        <Typography sx={styles.statType}>HP</Typography>
        <Typography sx={styles.statValue}>
          {pokemon?.stats?.[0]?.base_stat}
        </Typography>
      </Grid>
      <Grid item xs={6} sx={styles.statItem}>
        <Typography sx={styles.statType}>Weight</Typography>
        <Typography sx={styles.statValue}>{pokemon?.weight}</Typography>
      </Grid>
      <Grid item xs={6} sx={styles.statItem}>
        <Typography sx={styles.statType}>Attack</Typography>
        <Typography sx={styles.statValue}>
          {pokemon?.stats?.[1]?.base_stat}
        </Typography>
      </Grid>
      <Grid item xs={6} sx={styles.statItem}>
        <Typography sx={styles.statType}>Ability</Typography>
        <Typography sx={styles.statValue}>
          {pokemon?.abilities?.[0]?.ability.name}
        </Typography>
      </Grid>
      <Grid item xs={6} sx={styles.statItem}>
        <Typography sx={styles.statType}>Defence</Typography>
        <Typography sx={styles.statValue}>
          {pokemon?.stats?.[2]?.base_stat}
        </Typography>
      </Grid>
    </Grid>
  );
}
