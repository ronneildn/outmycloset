import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import Link from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

import SocialComponent from '../Social/SocialComponent';

const PublicFooter = (props) => {

    const {classes} = useStyles(props);

    const sitemap = [
        {
            url: "",
            label: "Home"
        },
        {
            url: "/about",
            label: "About Us"
        },
        {
            url: "",
            label: "Services"
        },
        {
            url: "",
            label: "Campaigns"
        },
        {
            url: "",
            label: "News"
        },
        {
            url: "",
            label: "Donate"
        },
        {
            url: "",
            label: "Contact Us"
        }
    ];

    return (
        <div className={classes.root}>
            <div className={classes.margin}>

                <div className={classes.logo}>
                    <Link href="/">
                        <Image
                            alt="Out My Closet logo"
                            src="/img/logo_thumb.png"
                            width={200}
                            height={40}
                        />
                    </Link>
                </div>

                <div className={classes.sitemapContainer}>
                    <ul>
                        {
                            sitemap.map((item, index)=> {
                                return(
                                    <li key={index}>
                                        <Link href={item.url}>
                                            <a>{item.label}</a>
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

                <div className={classes.socialContainer}>
                    <div className={classes.label}>
                        Connect with us on:
                    </div>
                    <SocialComponent size={15} />
                </div>

                <div>
                    <div>
                        Founder & President: Michael Narain
                        New York, NY
                    </div>
                    <div>
                        Email: <a href="mailto:info@outmycloset.org" target="_blank">info@outmycloset.org</a>
                    </div>
                    <div>Copyright © 2022 Out My Closet</div>
                </div>
            </div>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.foregroundTint,
        fontSize: 14,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "a": {
            color: theme.palette.secondary.foregroundTint,

            ":hover" : {
                color: theme.palette.secondary.foreground,
            }
        }
    },
    margin: {
        width: "100%",
        maxWidth: theme.size.pageMaxWidth,
        padding: "50px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        [theme.breakpoints.down('md')]: {

        },

        [theme.breakpoints.down('sm')]: {

        }
    },
    label: {
        color: theme.palette.secondary.foreground,
        fontSize: 15,
        fontWeight: 700,
        marginBottom: 10
    },
    logo: {
        cursor: "pointer"
    },
    sitemapContainer: {
        marginBottom: 20,

        "ul": {
            textAlign: "center"
        },

        "li": {
            display: "inline-block",
            padding: "5px 10px"
        }
    },
    socialContainer: {
        marginBottom: 10
    }

}));

export default PublicFooter;
