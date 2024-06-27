import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import BlogCarousel from "@/components/News/BlogCarousel";

const Blog = (props) => {
    const { classes } = useStyles(props);
    const { coverImage, content, media } = props.data;

    return (
        <Fragment>
            <div className={classes.root}>
                <div className={classes.coverImageContainer}>
                    <img
                        className={classes.campaignImage}
                        src={coverImage.data.attributes.url}
                        alt={props.data.title}
                    />
                </div>
                <div className={classes.contentContainer}>
                    <BlocksRenderer content={content} />
                </div>
                <div className={classes.carouselContainer}>
                    <BlogCarousel images={media.data} />
                </div>
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        padding: "20px 10px",
    },
    coverImageContainer: {
        marginBottom: 20,
    },
    campaignImage: {
        width: "100%",
        borderRadius: 10,
    },
    contentContainer: {
        img: {
            width: "100%",
            borderRadius: 10,
        },
    },
}));

export default Blog;
