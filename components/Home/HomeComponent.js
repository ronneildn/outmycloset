import Link from "next/link";
import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";

import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import UpdatesSection from "./UpdatesSection";
import MerchSection from "./MerchSection";
import staticData from "@/constants/data";

const HomeComponent = (props) => {
    const { classes } = useStyles();
    const donatationLink = staticData.donationsUrl;

    return (
        <Fragment>
            <div className={classes.root}>
                <section className={classes.heroContainer}>
                    <Hero donationLink={donatationLink} />
                </section>

                <div className={classes.homeContentContainer}>
                    <ServicesSection />
                    <UpdatesSection />
                    {/* <MerchSection /> */}
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
