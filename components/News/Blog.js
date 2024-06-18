import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Blog = (props) => {
    const { classes } = useStyles(props);
    const { content } = props.data;

    return (
        <Fragment>
            <div className={classes.root}>
                <BlocksRenderer content={content} />
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {},
}));

export default Blog;
