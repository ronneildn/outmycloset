import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const Header = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classes.root}>
            <h1>{props.title}</h1>
            <div>{props.subTitle}</div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        marginBottom: 20
    },
}));

export default Header;
