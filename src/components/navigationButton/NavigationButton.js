import React from "react";
import { Link as RouterLink } from "react-router-dom";

// material components
import Button from "@mui/material/Button";

// styles
import { styles } from "./NavigationButton.styles";

export default function NavigationButton({ pathname, title }) {
  return (
    <Button
      component={RouterLink}
      to={pathname}
      sx={styles.button}
      variant="text"
    >
      {title}
    </Button>
  );
}
