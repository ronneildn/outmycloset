import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

import PublicContent from '../Layout/PublicContent';
import SectionHeader from '../Presentation/SectionHeader';
import SocialComponent from '../Social/SocialComponent';
import UpdateList from './UpdateList';
import SocialEmbed from './SocialEmbed';

const NewsComponent = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classes.root}>
            <PublicContent margin>
                <SectionHeader
                    title={"News & Media"}
                    subTitle={"There are several ways in which you can keep up with the latest moves and shakes from OMC. Follow our social media accounts to see in depth, behind the scenes progress of our strides in serving our community."}
                />
                <div className={classes.socialLinkContainer}>
                    <SocialComponent size={30} />
                </div>

                <div className={classes.updateListContainer}>
                    <UpdateList />
                </div>

                <div className={classes.socialEmbedContainer}>
                    <SocialEmbed />
                </div>
            </PublicContent>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.background,
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",

        "h2" : {
            fontSize: 30,
            fontWeight: 500,
        },

        "p": {
            margin: "0 0 20px"
        }
    },
    socialLinkContainer: {
        margin: "0px 0 20px"
    },
    updateListContainer: {
        margin: "20px 0"
    },
    socialEmbedContainer: {
        margin: "20px 0"
    }
}));

export default NewsComponent;
