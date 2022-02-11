import React from "react";
import {AppBar, Typography} from "@mui/material";
import useStyles from "./styles";

const App = () => {

    const classes = useStyles();

    return (
        <AppBar className = {classes.appbar}>
              <Typography variant = "h4"> API  </Typography>
        </AppBar>
    )
}

export default App;