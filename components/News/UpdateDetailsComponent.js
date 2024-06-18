"use client";
import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

import PublicContent from "@/components/Layout/PublicContent";
import SectionHeader from "@/components/Presentation/SectionHeader";
import Loader from "@/components/Presentation/Loader";
import Blog from "@/components/News/Blog";
import useFetch from "@/hooks/useFetch";

const UpdateDetailsComponent = (props) => {
    const { classes } = useStyles(props);
    const router = useRouter();
    const [blog, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const url = `blogs?filters[slug][$eq]=${props.slug}&populate=*`;
    const { enqueueSnackbar } = useSnackbar();

    const { loading, error, data } = useFetch(url);

    const breadcrumbHandler = () => {
        router.push("/news");
    };

    useEffect(() => {
        setLoading(true);

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

        setLoading(false);
    }, [data, blog]);

    return (
        <div className={classes.root}>
            <PublicContent margin>
                {blog && blog.length && (
                    <Fragment>
                        <div
                            className={classes.breadcrumbs}
                            onClick={breadcrumbHandler}
                        >
                            <ArrowBackIosNewRoundedIcon
                                className={classes.beradcrumbIcon}
                            />
                            <span>All News &amp; Posts</span>
                        </div>

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <Fragment>
                                <SectionHeader
                                    className={classes.header}
                                    title={blog[0].attributes.title}
                                    subTitle={blog[0].attributes.subTitle}
                                />
                                <Blog data={blog[0].attributes} />
                            </Fragment>
                        )}
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
    breadcrumbs: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer",

        "&:hover": {
            color: theme.palette.primary.main,
        },
    },
    beradcrumbIcon: {
        fontSize: 14,
        marginRight: 10,
    },
    header: {
        padding: "20px 10px 0",
    },
}));

export default UpdateDetailsComponent;
