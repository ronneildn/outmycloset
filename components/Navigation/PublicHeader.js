import { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/icons-material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "tss-react/mui";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";

import NavItems from "./NavItems";

const PublicHeader = (props) => {
    const { classes } = useStyles();
    const theme = useTheme();
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = useState(false);
    //const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            {/* Logo */}
            <div className={classes.logoContainer}>
                <Link href="/">
                    <Image
                        alt="Out My Closet logo"
                        src="/img/logo_white.png"
                        width={100}
                        height={10}
                    />
                </Link>
            </div>
            <NavItems position="drawer" />
        </Box>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                component="nav"
                className={classNames(
                    classes.nav,
                    props.scrollOffset > 0
                        ? classes.navBackgroundScroll
                        : classes.navBackgroundTop
                )}
                sx={{ alignItems: "center" }}
            >
                <Toolbar className={classes.toolbar}>
                    {/* Logo */}
                    <div className={classes.logoContainer}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Link href="/">
                            <Image
                                alt="Out My Closet logo"
                                src="/img/logo_thumb.png"
                                width={120}
                                height={24}
                            />
                        </Link>
                    </div>

                    <Box
                        sx={{ display: { xs: "none", sm: "flex" } }}
                        className={classes.navContainer}
                    >
                        <NavItems position="header" />
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Box component="nav">
                <Drawer
                    //container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles()((theme) => ({
    nav: {
        "& .MuiToolbar-root": {
            minHeight: 60,
        },
    },
    navBackgroundTop: {
        backgroundColor: "transparent !important",
        transition: "all 2s ease 0s",
    },
    navBackgroundScroll: {
        backgroundColor: theme.palette.primary.main,
        transition: "all 2s ease 0s",
    },
    toolbar: {
        maxWidth: theme.size.pageMaxWidth,
        width: "100%",
        alignItems: "stretch",
    },
    logoContainer: {
        display: "flex",
        flex: "1 1 0%",
        alignItems: "center",
    },
}));

export default PublicHeader;
