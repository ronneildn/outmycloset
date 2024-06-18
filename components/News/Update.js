import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";
import Link from "next/link";
import classNames from "classnames";
import moment from "moment";
import LinesEllipsis from "react-lines-ellipsis";

const Update = (props) => {
    const { classes } = useStyles(props);
    const { data } = props;

    const goToItemHandler = () => {};

    return (
        <div className={classes.root}>
            <Link href={`/news/${data.slug}`}>
                <div className={classes.innerContainer}>
                    <div className={classes.imageContainer}>
                        <img
                            src={
                                data.coverImage.data.attributes.formats.medium
                                    .url
                            }
                        />
                    </div>
                    <div className={classes.content}>
                        <div className={classes.head}>
                            <div className={classes.headInnerContainer}>
                                <div className={classes.title}>
                                    {data.title}
                                </div>
                                <div className={classes.subTitle}>
                                    {data.subTitle}
                                </div>
                            </div>
                            <div className={classes.newTag}>new</div>
                        </div>
                        <div className={classes.desscription}>
                            <LinesEllipsis
                                text={data.description}
                                maxLine="3"
                                ellipsis="..."
                                trimRight
                                basedOn="words"
                            />
                        </div>
                        <div className={classes.date}>
                            {moment(data.data).format("MMM Do, YY")}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {},
    innerContainer: {
        backgroundColor: theme.palette.primary.main,
        maxHeight: 200,
        borderRadius: 5,
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        color: theme.palette.secondary.foreground,

        "&:hover": {
            boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
        },
    },
    imageContainer: {
        flex: "0 1 30%",
        position: "relative",
        overflow: "hidden",

        img: {
            width: "100%",
            objectFit: "contain",
        },
    },
    newTag: {
        position: "absolute",
        backgroundColor: theme.palette.primary.accent,
        right: 0,
        padding: "5px 10px",
        borderRadius: 15,
        fontWeight: 700,
    },
    content: {
        flex: " 1 1 0%",
        display: "flex",
        flexDirection: "column",
        padding: 20,
    },
    head: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        position: "relative",
    },
    headInnerContainer: {
        flex: " 1 1 0%",
    },
    title: {
        fontSize: 25,
        fontWeight: 500,
    },
    subTitle: {
        fontSize: 18,
    },
    desscription: {
        fontSize: 14,
        flex: " 1 1 0%",
    },
    date: {
        textAlign: "right",
        fontSize: 14,
    },
}));

export default Update;
