import React from "react";
import { useLocation } from "react-router-dom";

// material components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// components
import NavigationButton from "../navigationButton/NavigationButton";

// styles
import { styles } from "./Header.styles";

export default function Header() {
  const { pathname } = useLocation();

  if (pathname === "/catch") {
    return (
      <AppBar position='fixed' sx={styles.appBar}>
        <Toolbar>
          <Typography variant="h4" sx={styles.title}>
            Pokemon Catcher
          </Typography>
          <NavigationButton pathname={"/"} title={"Your Pokemon"} />
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar>
        <Typography variant="h4" sx={styles.title}>
          Pokemon Catcher
        </Typography>
        <NavigationButton pathname={"/catch"} title={"Catch Pokemon"} />
      </Toolbar>
    </AppBar>
  );
}
