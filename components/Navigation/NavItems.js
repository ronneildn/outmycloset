import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import Link from 'next/link';

const NavItems = (props) => {

    const {classes} = useStyles(props);

    let navItems;
    switch (props.layout) {
    case "admin":
        navItems = adminItems;
        break;
    default:
        navItems = publicItems;
    }


    return (
        <Fragment>
            <div className={
                classNames(
                    classes.root,
                    props.position === 'header'? classes.header: classes.drawer
                )
            }>
                {
                    navItems.map((item, index) => (
                        <Link key={index} href={item.url}>
                            <a key={index} className={classes.navItem}>
                                {item.name}
                            </a>
                        </Link>
                    ))
                }
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
    },
    header: {
        flexDirection: "row"
    },
    drawer: {
        flexDirection: "column"
    },
    navItem: {
        color: theme.palette.secondary.foreground,
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        textTransform: "uppercase",
        fontSize: 14,
        fontWeight: 400,
        cursor: "pointer",

        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        }
    },
}));

const publicItems = [
    {
        name: "About Us",
        url: "/about"
    },
    {
        name: "Services",
        url: "/services"
    },
    {
        name: "Campaigns",
        url: "/campaigns"
    },
    {
        name: "News & Media",
        url: "/news"
    },
    {
        name: "Get Invloved",
        url: "/volunteer"
    },
];

const adminItems = [
    {
        name: "Dashboard",
        url: "/admin"
    },
    {
        name: "Updates",
        url: "/admin/updates"
    },
];

export default NavItems;
