import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import Image from 'next/image';

const UpdateItem = (props) => {

    const {classes} = useStyles(props);
    const data = props.data;

    return (
        <a className={classes.root} href={data.link}>
            <div className={classes.imageContainer}>
                <img
                    className={classes.image}
                    alt="Out My Closet logo"
                    src={data.imgUrl}
                />
            </div>
            <div className={classes.container}>
                <div className={classes.head}>
                    <h3 className={classes.title}>
                        {data.title}
                    </h3>
                    <div className={classes.subTitle}>
                        {data.subTitle}
                    </div>
                </div>
                <div className={classes.content}>
                    {data.content}
                </div>
                <div
                    className={classes.link}
                >
                    {data.linkLabel}
                </div>
            </div>
        </a>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        color: theme.palette.primary.foregroundTint,
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
    },
    imageContainer: {

    },
    image: {
        width: "100%"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
    },
    head: {
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 700,
        textTransform: "uppercase",
        color: theme.palette.primary.foreground,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 300,
        textTransform: "uppercase",
    },
    content: {
        fontSize: 13,
        fontWeight: 300,
        lineHeight: 1.5,
        flex: "1 1 0%",
        marginBottom: 10
    },
    link: {
        fontSize: 14,
        fontWeight: 700,
        textTransform: "uppercase",
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        color: theme.palette.primary.main,

        ":hover" : {
            color: theme.palette.primary.dark,
        }
    }

}));

export default UpdateItem;
