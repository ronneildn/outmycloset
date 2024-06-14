import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const ButtonPanel = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end"
    },
}));

export default ButtonPanel;
