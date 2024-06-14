import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

const SocialEmbed = (props) => {

    const {classes} = useStyles(props);

    return (
        <Fragment>
            <div className={classes.root}>
                Social Embed
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {

    },
}));

export default SocialEmbed;
