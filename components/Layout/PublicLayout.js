"use client";
import { makeStyles } from "tss-react/mui";
import { useState, useEffect, useCallback } from "react";
import PublicHeader from "../Navigation/PublicHeader";
import PublicFooter from "../Navigation/PublicFooter";

const PublicLayout = (props) => {
    const { classes } = useStyles();
    const [offset, setOffset] = useState(0);

    //Scrolling
    const onScroll = useCallback((event) => {
        const { scrollY } = window;
        setOffset(scrollY);
        console.log(scrollY);
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });

        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        };
    }, []);

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <PublicHeader scrollOffset={offset} />
            </header>
            <main className={classes.main}>{props.children}</main>
            <footer>
                <PublicFooter />
            </footer>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        // backgroundColor: theme.palette.secondary.background,
        // color: theme.palette.secondary.foreground,
        //overflow: "auto",
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
