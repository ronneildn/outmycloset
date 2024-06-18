import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "tss-react/mui";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import ArrowDown from "@mui/icons-material/ExpandMoreRounded";

import Donation from "./Donation";
import HeroCarousel from "./HeroCarousel";
import SocialComponent from "../Social/SocialComponent";

const HeroComponent = (props) => {
    const { classes } = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.backgroundContainer}>
                {/*
                <HeroCarousel/>
                <div className={classes.overlay}></div>
                */}
                <img
                    className={classes.backgroundImg}
                    src="/img/hero.png"
                    alt="Out My Closet"
                />
            </div>

            <div className={classes.outerContainer}>
                <div className={classes.mainContainer}>
                    <h1 className={classes.heroTitle}>
                        <span className={classes.inline}>Empowering </span>
                        <span className={classes.inline}>LGBTQ+ Youth!</span>
                    </h1>
                    <div className={classes.heroSubtitle}>
                        Empowering displaced and under resourced LGBTQ youth
                        with <b>clothing</b>, <b>care</b> and <b>compassion</b>{" "}
                        and creating affirming messages of hope, inclusiveness
                        and support.
                    </div>

                    <div className={classes.donationContainer}>
                        <Donation />
                    </div>

                    <Grid
                        container
                        direction="row"
                        justifyContent={{ xs: "center", sm: "start" }}
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Link href={props.donationLink}>
                                <Button variant="contained" size="large">
                                    Donate
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" size="large">
                                Get Help
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                <SocialComponent />

                <div className={classes.footer}>
                    <ArrowDown className={classes.down} />
                </div>
            </div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",

        position: "relative",

        color: theme.palette.secondary.foreground,
    },
    backgroundContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.secondary.background,
    },
    backgroundImg: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 700,

        [theme.breakpoints.down("lg")]: {
            width: 600,
        },

        [theme.breakpoints.down("md")]: {
            width: 500,
        },

        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        //backgroundColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.secondary.background,
        opacity: 0.7,
    },
    outerContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
        width: "100%",
        alignItems: "center",
        zIndex: 1,
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
        position: "relative",
        alignItems: "start",
        justifyContent: "center",
        textAlign: "left",
        width: "100%",
        maxWidth: theme.size.pageMaxWidth,
        //padding: theme.spacing(1, 2)
        padding: "20px 80px",

        [theme.breakpoints.down("lg")]: {
            padding: "20px 50px",
        },

        [theme.breakpoints.down("sm")]: {
            alignItems: "center",
            textAlign: "center",
            padding: "20px 40px",
        },
    },
    heroTitle: {
        color: theme.palette.primary.accent,
        fontSize: 60,
        fontWeight: 700,
        textTransform: "uppercase",
        lineHeight: 1,
        maxWidth: 700,
        marginBottom: 20,

        [theme.breakpoints.down("md")]: {
            fontSize: 40,
            maxWidth: 400,
        },

        [theme.breakpoints.down("sm")]: {
            //fontSize: 30,
        },
    },
    heroSubtitle: {
        color: theme.palette.secondary.foreground,
        fontSize: 18,
        lineHeight: 1.5,
        maxWidth: 500,

        [theme.breakpoints.down("sm")]: {
            //fontSize: 14,
        },
    },
    donationContainer: {
        margin: "100px 0 30px",

        [theme.breakpoints.down("sm")]: {
            margin: "50px 0 30px",
        },
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
    },
    down: {
        fontSize: 50,
        opacity: 0.6,
        animation: "scrollbounce 2s linear infinite",
    },
    inline: {
        display: "inline-block",
    },
}));

export default HeroComponent;
