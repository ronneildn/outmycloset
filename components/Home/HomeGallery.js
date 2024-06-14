import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import Carousel from "../Presentation/Carousel";

const HomeGallery = (props) => {
    const { classes } = useStyles(props);
    const theme = useTheme();

    const images = [
        {
            imgUrl: "/img/slides/FE1VOupXMAE2h7B.jpeg",
            description: "",
            alt: "",
        },
        {
            imgUrl: "/img/slides/ELpgMBIXYAEBpjk.jpeg",
            description: "",
            alt: "",
        },
        {
            imgUrl: "/img/slides/EMKj13aXUAYccw-.jpeg",
            description: "",
            alt: "",
        },
        {
            imgUrl: "/img/slides/ExpnZt6XIAETsvY.jpeg",
            description: "",
            alt: "",
        },
        {
            imgUrl: "/img/slides/Fdwav10WIAIbY5c.jpeg",
            description: "",
            alt: "",
        },
        {
            imgUrl: "/img/slides/Fdwavb6WIAEUEe7.jpeg",
            description: "",
            alt: "",
        },
        {
            imgUrl: "/img/slides/FdwavoaWYAArlMx.jpeg",
            description: "",
            alt: "",
        },
    ];

    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <div
                    className={classNames(
                        classes.backgroundLayer1,
                        classes.background
                    )}
                ></div>
                <div
                    className={classNames(
                        classes.backgroundLayer2,
                        classes.background
                    )}
                ></div>
            </div>

            <div className={classes.carouselContainer}>
                <Carousel
                    enableAutoPlay
                    enableSwipe
                    infinite
                    disableArrowsOnEnd
                    arrowColor={theme.palette.secondary.foreground}
                >
                    {images.map((item) => {
                        return (
                            <div
                                key={item._id}
                                className={classes.imageContainer}
                            >
                                <Image
                                    className={classes.image}
                                    alt="Out My Closet logo"
                                    src={item.imgUrl}
                                    width={400}
                                    height={300}
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
    },
    background: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    backgroundLayer1: {
        width: "100%",
        height: "100%",
        transform: "rotate(20deg)",
        borderRadius: 20,

        background: `linear-gradient(to bottom right,
            ${theme.palette.primary.main},
            ${theme.palette.primary.accent},
            ${theme.palette.primary.accent2}
        )`,
    },
    backgroundLayer2: {
        width: "100%",
        height: "100%",
        transform: "rotate(-10deg)",
        borderRadius: 20,

        background: `linear-gradient(to bottom right,
            ${theme.palette.primary.accent2},
            ${theme.palette.primary.main},
            ${theme.palette.primary.accent}
        )`,
    },
    carouselContainer: {
        padding: "40px 10px",
    },
    imageContainer: {
        // width: 500,
        // height: 500,
        //overflow: "hidden",
        borderRadius: 10,
    },
    image: {
        objectFit: "cover",
    },
}));

export default HomeGallery;
