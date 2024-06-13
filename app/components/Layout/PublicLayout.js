//import { useState } from "react";
import { makeStyles } from "tss-react/mui";

const PublicLayout = (props) => {
    const { classes } = useStyles();
    //const [offset, setOffset] = useState(0);

    return <div className={classes.root}>hi</div>;
};

const useStyles = makeStyles()((theme) => ({
    root: {
        // backgroundColor: theme.palette.secondary.background,
        // color: theme.palette.secondary.foreground,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
    },
    main: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
    },
}));

export default PublicLayout;
