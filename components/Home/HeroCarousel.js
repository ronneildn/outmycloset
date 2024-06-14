import { Fragment, useState } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";

const INTERVAL = 10000;

const HeroCarousel = (props) => {
    const { classes } = useStyles(props);
    let [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex < slides.length - 1 ? ++currentIndex : 0);

        setTimeout(function () {
            nextSlide();
        }, INTERVAL);
    };

    const slides = ["/img/img_banner.jpg", "/img/Hero1.jpg", "/img/Hero2.jpg"];

    //setTimeout(nextSlide, INTERVAL);

    return (
        <Fragment>
            {/*
            <div
                className={classNames(classes.background, "animated", "fadeIn")}
                style={{backgroundImage: `url('${slides[currentIndex]}')`}}
            />
            */}
            <div
                className={classNames(classes.background, "animated", "fadeIn")}
                style={{ backgroundImage: `url('${slides[0]}')` }}
            />
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {},
    slide: {},
    background: {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        //maxWidth: 1000,

        //height: 700
    },
}));

export default HeroCarousel;
