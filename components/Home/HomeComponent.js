import Link from "next/link";
import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";

import Hero from "./Hero";
import ServicesSection from "./ServicesSection";

const HomeComponent = (props) => {
    const { classes } = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                <section className={classes.heroContainer}>
                    <Hero />
                </section>

                <div className={classes.homeContentContainer}>
                    <ServicesSection />
                </div>
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        // backgroundColor: theme.palette.secondary.background,
        // color: theme.palette.secondary.foreground,
        //overflow: "auto",

        h2: {
            fontSize: 30,
            fontWeight: 500,
        },
    },
    heroContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        minHeight: 700,
    },
    homeContentContainer: {
        backgroundColor: theme.palette.primary.background,
        position: "relative",
    },
}));

export default HomeComponent;
