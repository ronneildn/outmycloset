"use client";
import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useSnackbar } from "notistack";

import PublicContent from "../Layout/PublicContent";
import SectionHeader from "../Presentation/SectionHeader";
import Blog from "@/components/News/Blog";
import useFetch from "@/hooks/useFetch";

const UpdateDetailsComponent = (props) => {
    const { classes } = useStyles(props);
    const [blog, setBlogs] = useState(null);
    const url = `blogs?filters[slug][$eq]=${props.slug}&populate=*`;
    const { enqueueSnackbar } = useSnackbar();

    console.log(url);
    const { loading, error, data } = useFetch(url);

    useEffect(() => {
        if (data?.error) {
            console.log("error");
            enqueueSnackbar("Sorry an error occured getting blog", {
                autoHideDuration: 3000,
                variant: "error",
            });
        } else if (data?.data) {
            setBlogs(data.data);
            console.log(blog);
        }
    }, [data, blog]);

    return (
        <div className={classes.root}>
            <PublicContent margin>
                {blog && blog.length && (
                    <Fragment>
                        <div>
                            <ArrowBackIosNewRoundedIcon /> All News &amp; Posts
                        </div>

                        <SectionHeader title={blog[0].attributes.title} />
                        <Blog data={blog[0].attributes} />
                    </Fragment>
                )}
            </PublicContent>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.background,
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",

        h2: {
            fontSize: 30,
            fontWeight: 500,
        },

        p: {
            margin: "0 0 20px",
        },
    },
}));

export default UpdateDetailsComponent;
