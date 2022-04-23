import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// material components
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// pokemon redux
import { getWildPokemonById } from "../../state/pokemon/pokemon.selectors";

// helpers
import { handleSubmit } from "./CatchPokemonDialogContent.helpers";

// styles
import { styles } from "./CatchPokemonDialogContent.styles";

export default function CatchPokemonDialogContent({ handleClose, pokemonId }) {
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) =>
    getWildPokemonById(state, pokemonId)
  );

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleDialogClose = () => {
    setNickname("");
    handleClose();
  };

  return (
    <DialogContent sx={styles.dialogContent}>
      <form
        onSubmit={(event) =>
          handleSubmit({
            event,
            nickname,
            dispatch,
            selectedPokemon,
            handleClose,
            setNickname,
          })
        }
      >
        <DialogContentText sx={styles.dialogContentText}>
          Would you like to give Pokemon a nickname?
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          label="nickname"
          variant="outlined"
          color="secondary"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <DialogActions sx={styles.dialogActions}>
          <Button
            onClick={handleDialogClose}
            color="primary"
            sx={styles.button}
            variant="contained"
          >
            Back
          </Button>
          <Button
            color="secondary"
            sx={styles.button}
            variant="contained"
            type="submit"
          >
            Ok
          </Button>
        </DialogActions>
      </form>
    </DialogContent>
  );
}
