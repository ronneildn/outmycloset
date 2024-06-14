import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const Panel = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classNames(classes.root, props.margin? classes.margin: "")}>
            {props.children}
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        borderRadius: 10,
        backgroundColor: theme.palette.secondary.foreground,
        padding: 20
    },
    margin: {
        marginBottom: 20
    }
}));

export default Panel;
