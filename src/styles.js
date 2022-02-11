import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    appbar: {
        padding: "5px 5px",
        background: "linear-gradient(45deg, blue 30%, #fff 90%)",
        boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .3)",
        height: 70,
        position: "fixed",
    },

    appbarText: {
        border: "2px solid #fff",
        padding: "7px",
        width: "60px",
    },

    bannerContainer: {
        marginTop: "75px",
        width: "100%",
        fontFamily: "Helvetica, sans-serif",
        boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .5)",
        padding: "5vw",
    },

    span: {
        color: "blue",
        borderBottom: "2px solid #000",
    },

    button: {
        background: "blue",
        color: "#fff",
        margin: "50vw",
    },
});

export default useStyles;