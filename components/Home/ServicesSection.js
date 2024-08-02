import { Fragment } from "react";
import Link from "next/link";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import { useTheme } from "@mui/material/styles";
import CounselingIcon from "@mui/icons-material/SupervisorAccountRounded";
import HangerIcon from "@mui/icons-material/CheckroomRounded";
import CommunityIcon from "@mui/icons-material/GroupsRounded";
import EducationIcon from "@mui/icons-material/SchoolRounded";

import SectionHeader from "../Presentation/SectionHeader";
import HomeGallery from "./HomeGallery";

const ServicesSection = (props) => {
    const { classes } = useStyles(props);
    const theme = useTheme();

    const serviceItem = (type) => {
        let data = {};

        switch (type) {
            case "counseling":
                data = {
                    title: "Counseling",
                    description:
                        "Curating supportive services and affirming spaces for HIV+ and HIV- vulnerable queer young men of color.",
                    icon: <CounselingIcon />,
                    color: theme.palette.primary.main,
                };
                break;
            case "clothing":
                data = {
                    title: "Clothing",
                    description:
                        "Executing elevated mobile resource pop-up boutiques.",
                    icon: <HangerIcon />,
                    color: theme.palette.primary.accent,
                };
                break;
            case "community":
                data = {
                    title: "Cyber Community",
                    description: "Creating social media empowerment campaigns.",
                    icon: <CommunityIcon />,
                    color: theme.palette.primary.accent2,
                };
                break;
            case "education":
                data = {
                    title: "Education",
                    description:
                        "Immersive intensive internship for Public Health, Social Work, and Fashion Industry LGBTQ+ students",
                    icon: <EducationIcon />,
                    color: theme.palette.primary.accent3,
                };
                break;
        }

        return (
            <Link className={classes.serviceItem} href="/services">
                <div className={classes.iconContainer}>
                    <div
                        className={classNames(classes.icon, "icon")}
                        style={{ background: data.color }}
                    >
                        {data.icon}
                    </div>
                </div>
                <div className={classes.serviceData}>
                    <div className={classes.serviceTitle}>{data.title}</div>
                    <div className={classes.serviceDescription}>
                        {data.description}
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <section className={classes.container}>
            <div className={classes.margin}>
                <div className={classes.innerContainer}>
                    <SectionHeader
                        title={"Our services"}
                        subTitle={
                            "We deliver client-centered, evidence-based programs and high-impact supportive services, implementing creativity and adaptability for the modern client."
                        }
                    />

                    <Grid
                        container
                        className={classes.contentContainer}
                        spacing={2}
                        alignItems="flex-start"
                    >
                        <Grid item container spacing={1}>
                            <Grid item xs={12} md={6}>
                                {serviceItem("counseling")}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {serviceItem("clothing")}
                            </Grid>

                            <Grid item xs={12} md={6}>
                                {serviceItem("education")}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {serviceItem("community")}
                            </Grid>
                        </Grid>
                        {/* <Grid item xs>
                            <div className={classes.galleryContainer}>
                                <HomeGallery />
                            </div>
                        </Grid> */}
                    </Grid>
                </div>
            </div>
        </section>
    );
};

const useStyles = makeStyles()((theme) => ({
    margin: {
        width: "100%",
        maxWidth: theme.size.pageMaxWidth,
        padding: "50px 40px",

        [theme.breakpoints.down("md")]: {},

        [theme.breakpoints.down("sm")]: {
            padding: "50px 20px",
        },
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.primary.foregroundTint,

        h2: {
            color: theme.palette.primary.foreground,
        },
    },
    serviceItem: {
        padding: 20,
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        color: theme.palette.primary.foregroundTint,
        cursor: "pointer",

        "&:hover": {
            transition: "all 0.3s ease 0s",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",

            ".icon": {
                background: `linear-gradient(to bottom right,
                    ${theme.palette.primary.main},
                    ${theme.palette.primary.accent},
                    ${theme.palette.primary.accent2}
                ) !important`,
            },
        },
    },
    iconContainer: {
        marginRight: 10,
    },
    icon: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
        color: theme.palette.secondary.foreground,
    },
    serviceData: {},
    serviceTitle: {
        color: theme.palette.primary.foreground,
        fontSize: 18,
        fontWeight: 700,
    },
    serviceDescription: {
        fontSize: 14,
    },
    galleryContainer: {
        padding: 10,

        [theme.breakpoints.down("md")]: {
            margin: "60px 10px 40px",
        },
    },
}));

export default ServicesSection;
