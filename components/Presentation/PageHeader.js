import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const PageHeader = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classNames(classes.root, props.maxWidth? classes.maxWidth: "")}>
            <h1 className={classes.header}>{props.title}</h1>
            <div>{props.subTitle}</div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        marginBottom: 20
    },
    header: {
        fontWeight:400,
        color: theme.palette.primary.foregroundTint
    },
    maxWidth: {
        maxWidth: theme.size.pageMaxWidth,
        margin: "0 auto",
        width: "100%"
    }
}));

export default PageHeader;
