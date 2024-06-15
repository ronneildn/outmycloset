import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";

//import Odometer from "../Presentation/Odometer";

const Donation = (props) => {
    const { classes } = useStyles(props);
    const donatedItems = 34388;

    return (
        <Fragment>
            <div className={classes.root}>
                <div className={classes.label}>Donated Items</div>
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 50,

        ".odometer": {
            backgroundColor: theme.palette.primary.accent2,
            color: theme.palette.secondary.background,
            borderRadius: 5,
            padding: 5,
        },

        ".odometer-digit": {
            //padding: "10px 5px",
            margin: 1,
            backgroundColor: theme.palette.primary.accent2,
            color: theme.palette.secondary.background,
            fontFamily: "'Gemunu Libre', sans-serif",
            fontSize: 60,
            fontWeight: 400,
            lineHeight: "55px !important",
            display: "flex",
        },

        [theme.breakpoints.down("md")]: {
            ".odometer-digit": {
                fontSize: 40,
            },
        },
    },
    label: {
        fontSize: 16,
        fontWeight: 700,
        textTransform: "uppercase",
    },
}));

export default Donation;
