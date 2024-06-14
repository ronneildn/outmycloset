import { makeStyles } from "tss-react/mui";

import PublicHeader from "../Navigation/PublicHeader";
import PublicFooter from "../Navigation/PublicFooter";

const PublicLayout = (props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <PublicHeader />
            </header>
            <main className={classes.main}>{props.children}</main>
            <footer></footer>
        </div>
    );
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
