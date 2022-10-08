import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const Shell = (props) => {

    const {classes} = useStyles(props);

    return (
        <Fragment>
            <div className={classes.root}>

            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {

    },
}));

export default Shell;
