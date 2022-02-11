import React, {useState, useEffect} from "react";
import {AppBar, Typography, Container, Button} from "@mui/material";
import useStyles from "./styles";
import theme from "./AppTheme";
import { ThemeProvider } from "@mui/styles";
import axios from "axios";

const fetchData = async () => {
    try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");

        console.log(data.data);
        return data;

    } catch (error) {

        console.log(error);
    }
}

const App = () => {

    const [showButton, setShowButton] = useState(false);

    const classes = useStyles();

    useEffect(() => {

        setInterval(() => {

            setShowButton(true);
        }, 2000);
    }, []);

    return (
        <ThemeProvider theme = {theme}>
            <AppBar className = {classes.appbar}>
              <Typography className = {classes.appbarText} variant = "h4" gutterBottom> API  </Typography>
            </AppBar>

            <Container className = {classes.bannerContainer}>
                <Typography variant = "h3"> A modern API app made in <span className = {classes.span}> react. </span></Typography>
            </Container>

            {showButton && (
                <Button onClick = {fetchData}style = {{color: "#fff", background: "blue", margin: "20vw", marginTop: "30vw", padding: "3vw"}}> 
                    <Typography variant = "h5"> Enter API bank  </Typography>
                </Button>
            )}
            
            <Container>
                <Typography> </Typography>
            </Container>
        </ThemeProvider>
    )
}

export default App;