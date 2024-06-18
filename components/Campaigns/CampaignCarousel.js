import { Fragment, useState } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "@/components/Presentation/NextImage";
import Carousel from "@/components/Presentation/Carousel";

const CampaignCarousel = (props) => {
    const { classes } = useStyles(props);
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 200, itemsToShow: 2, itemsToScroll: 2 },
        { width: 400, itemsToShow: 4, itemsToScroll: 4 },
    ];

    const imageClickHandle = (current) => {
        setIndex(current);
    };

    const slides = props.images.map((item) => {
        return {
            src: item,
        };
    });

    return (
        <div className={classes.root}>
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
                render={{ slide: NextJsImage }}
                index={index}
            />

            <Carousel enableSwipe infinite breakPoints={breakPoints}>
                {props.images.map((item, index) => {
                    return (
                        <div
                            key={item._id}
                            className={classes.imageContainer}
                            onClick={() => imageClickHandle(index)}
                        >
                            <Image
                                className={classes.image}
                                alt="Campaign image"
                                src={item}
                                width={100}
                                height={100}
                            />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {},
    imageContainer: {},
    image: {
        borderRadius: 5,
        cursor: "pointer",
    },
}));

export default CampaignCarousel;
