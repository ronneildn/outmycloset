/* HTML: <div class="loader"></div> */
import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";

const Loader = (props) => {
    const { classes } = useStyles(props);

    return (
        <div className={classes.root}>
            <div class="loader"></div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
}));

export default Loader;
