import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const Ribbon = (props) => {

    const {classes} = useStyles(props);
    const statusStyle = [];

    if(props.status === 'error') statusStyle = classes.error;
    else if(props.status === 'success') statusStyle = classes.success;

    return (
        <Fragment>
            <div className={classNames(classes.root, statusStyle)}>
                {props.children}
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        borderRadius: 3,
        padding: "8px 10px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.foreground,
        fontSize: 13
        //padding: (props) => props.padding? props.padding: "10px 15px",
        // background: (props) => props.status === 'plain'?
        //     StatusColor().hue: StatusColor(props.status).hue,
        // color: (props) => {
        //     return props.status && props.status !== 'plain'?
        //         StatusColor(props.status).contrast:
        //         StatusColor(props.status).shade;
        // },

    },
    error: {
        backgroundColor: theme.palette.secondary.error,
    },
    success: {
        backgroundColor: theme.palette.secondary.success,
    }
}));

export default Ribbon;
