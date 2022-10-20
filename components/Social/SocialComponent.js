import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import Link from 'next/link';

import Instagram from '../../public/svg/instagram.svg';
import Facebook from '../../public/svg/facebook.svg';
import Twitter from '../../public/svg/twitter.svg';
import Tumblr from '../../public/svg/tumblr.svg';
import Youtube from '../../public/svg/youtube.svg';
import LinkedIn from '../../public/svg/linkedin.svg';
//import { ReactComponent as Instagram } from '../../public/svg/instagram.svg';

const SocialComponent = (props) => {

    const {classes} = useStyles(props);
    const platforms = [
        {
            name: "instagram",
            icon: <Instagram className={classes.icon} style={{width: props.size? props.size: 20}}/>,
            url: "https://www.instagram.com/outmyclosetorg/"
        },
        {
            name: "facebook",
            icon: <Facebook className={classes.icon} style={{width: props.size? props.size: 20}}/>,
            url: "https://www.facebook.com/OutMyClosetOrg/"
        },
        {
            name: "twitter",
            icon: <Twitter className={classes.icon} style={{width: props.size? props.size: 20}}/>,
            url: "https://www.facebook.com/OutMyClosetOrg/"
        },
        {
            name: "tumblr",
            icon: <Tumblr className={classes.icon} style={{width: props.size? props.size: 20}}/>,
            url: "https://www.facebook.com/OutMyClosetOrg/"
        },
        {
            name: "youtube",
            icon: <Youtube className={classes.icon} style={{width: props.size? props.size: 20}}/>,
            url: "https://www.facebook.com/OutMyClosetOrg/"
        },
        {
            name: "linkedIn",
            icon: <LinkedIn className={classes.icon} style={{width: props.size? props.size: 20}}/>,
            url: "https://www.facebook.com/OutMyClosetOrg/"
        }
    ]

    return (
        <div className={classes.root}>
            {platforms.map((item, index)=> {
                return (
                    <Link href={item.url} key={item.name}>
                        <a className={classes.platform} target="_blank">
                            {item.icon}
                        </a>
                    </Link>
                )
            })}

        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
    },
    platform: {
        background: "rgba(255, 255, 255, 0.3)",
        padding: 10,
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 3,

        ":hover": {
            background: "rgba(255, 255, 255, 1)",
            transition: `background-color 500ms ease`
        }
    },
    icon: {
        width: 20,
        color: theme.palette.secondary.foreground,
        filter: "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4))",

        "svg": {
            fill: theme.palette.secondary.foreground,
            stroke: theme.palette.secondary.foreground,
        }

    }
}));

export default SocialComponent;
