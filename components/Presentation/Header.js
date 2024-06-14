import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const Header = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classNames(classes.root, props.maxWidth? classes.maxWidth: "")}>
            <h1 className={classes[props.size]}>{props.title}</h1>
            <div>{props.subTitle}</div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        marginBottom: 20
    },
    maxWidth: {
        maxWidth: theme.size.pageMaxWidth,
        margin: "0 auto",
        width: "100%"
    },
    small: {
        fontSize: 22
    }
}));

export default Header;
