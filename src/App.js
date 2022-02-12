import React, {useState, useEffect} from "react";
import {AppBar, Typography, Container, Button} from "@mui/material";
import useStyles from "./styles";
import theme from "./AppTheme";
import { ThemeProvider } from "@mui/styles";
import axios from "axios";

let clickCounter = 0;

const App = () => {

    const [showButton, setShowButton] = useState(false);
    const [JSONdata, setJSONData] = useState(null);

    const classes = useStyles();

    const FetchData = async () => {

        clickCounter++;

        if (clickCounter <= 1) {

            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setJSONData(response.data);
    
            console.log(JSONdata);
        
        } else {

            return false;
        }
    };

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
                <Button onClick = {FetchData} style = {{color: "#fff", background: "blue", margin: "20vw", marginTop: "30vw", padding: "3vw"}}> 
                    <Typography variant = "h5"> Enter API bank  </Typography>
                </Button>
            )}
            
            <Container>
                {JSONdata &&
                    JSONdata.map((data, index) => {
                        return (
                            <div key = {index}>
                                <Typography>
                                    <h1> {data.name} </h1>
                                    <ul className = {classes.listItem}>
                                        <li> {data.company.catchPhrase} </li>
                                        <li> {data.username} </li>
                                        <li> {data.website} </li>
                                        <li> {data.email} </li>  
                                    </ul>
                                </Typography>
                            </div>
                        )
                    })}
            </Container>
        </ThemeProvider>
    )
}

export default App;