import React from "react";

// material components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

// components
import CatchPokemonDialogContent from "../catchPokemonDialogContent/CatchPokemonDialogContent";

// styles
import { styles } from "./CatchPokemonDialog.styles";

export default function CatchPokemonDialog({ setOpen, open, pokemonId }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={styles.dialogTitle}>
        Add Pokemon to the Pokedex?
      </DialogTitle>
      <CatchPokemonDialogContent
        handleClose={handleClose}
        pokemonId={pokemonId}
      />
    </Dialog>
  );
}
