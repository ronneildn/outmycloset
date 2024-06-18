import { Fragment, useState } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "@/components/Presentation/NextImage";
import Carousel from "@/components/Presentation/Carousel";

const BlogCarousel = (props) => {
    const { classes } = useStyles(props);
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 300, itemsToShow: 3, itemsToScroll: 3 },
        { width: 500, itemsToShow: 5, itemsToScroll: 5 },
    ];

    const imageClickHandle = (current) => {
        setIndex(current);
    };

    const slides = props.images.map((item) => {
        return {
            src: item.attributes.url,
            alt: item.attributes.name,
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
                                alt={item.attributes.name}
                                src={item.attributes.url}
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

export default BlogCarousel;
