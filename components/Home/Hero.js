import {Fragment} from 'react';
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import classNames from "classnames";
import ArrowDown from '@mui/icons-material/ExpandMoreRounded';

import Donation from './Donation';

const HeroComponent = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.backgroundContainer}>
                {/*
                <div
                    className={classes.background}
                    style={{backgroundImage: "url('/img/Hero1.jpg')"}}
                ></div>
                <div
                    className={classes.background}
                    style={{backgroundImage: "url('/img/img_banner.jpg')"}}
                ></div>
                */}
                <img
                    className={classes.backgroundImg}
                    src="/img/Hero2.jpg"
                />
            </div>

            <div className={classes.outerContainer}>
                <div className={classes.mainContainer}>
                    <h1 className={classes.heroTitle}>
                        Empowering LGBTQ+ Youth
                    </h1>
                    <div className={classes.heroSubtitle}>
                        Out My Closet is a non-profit organization that empowers displaced and under resourced LGBTQ youth with <b>clothing</b>, <b>care</b> and <b>compassion</b> and creates affirming multimedia messages of hope, inclusiveness and support.
                    </div>

                    <div className={classes.donationContainer}>
                        <Donation />
                    </div>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Button variant="contained" size="large">Donate</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" size="large">Get Help</Button>
                        </Grid>
                    </Grid>
                </div>

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
        backgroundColor: theme.palette.secondary.background,
        color: theme.palette.secondary.foreground,
    },
    backgroundContainer: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.primary.dark,
    },
    background: {
        backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
        position: "fixed",
        //top: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        maxWidth: 1000,

        height: 700
    },
    backgroundImg: {
        position: "absolute",
        bottom: 0,
        right: 20,
        display: "none"
    },
    outerContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
        width: "100%",
        alignItems: "center",
        zIndex: 1
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: theme.size.pageMaxWidth,
        padding: theme.spacing(1, 2)
    },
    heroTitle: {
        color: theme.palette.primary.accent,
        fontSize: 50,
        fontWeight: 700,
        textTransform: "uppercase",

        [theme.breakpoints.down('md')]: {
            fontSize: 40,
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
        }
    },
    heroSubtitle: {
        color: theme.palette.secondary.foreground,
        maxWidth: 700,
        lineHeight: 1.5,

        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    donationContainer: {
        margin: "30px 0 50px"
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        position: "relative",


    },
    down: {
        fontSize: 50,
        opacity: 0.6,
        animation: "scrollbounce 2s linear infinite"
    }
}));

export default HeroComponent;
