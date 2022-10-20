import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const PublicContent = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.contentContainer}>
                {props.children}
            </div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        padding: "100px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    contentContainer: {
        backgroundColor: theme.palette.primary.background,
        color: theme.palette.primary.foreground,
        width: "100%",
        maxWidth: theme.size.pageMaxWidth,
        borderRadius: 5
    }
}));

export default PublicContent;
