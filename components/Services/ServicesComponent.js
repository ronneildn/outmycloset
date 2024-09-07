"use client";
import { Fragment } from "react";
import Link from "next/link";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";
import parse from "html-react-parser";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import CounselingIcon from "@mui/icons-material/SupervisorAccountRounded";
import HangerIcon from "@mui/icons-material/CheckroomRounded";
import CommunityIcon from "@mui/icons-material/GroupsRounded";
import EducationIcon from "@mui/icons-material/SchoolRounded";

import PublicContent from "../Layout/PublicContent";
import SectionHeader from "../Presentation/SectionHeader";
import staticData from "@/constants/data";

const ServicesComponent = (props) => {
    const { classes } = useStyles(props);
    const theme = useTheme();

    const serviceItem = (type) => {
        let data = {};

        switch (type) {
            case "counseling":
                data = {
                    title: "Counseling",
                    description:
                        "<p>Out My Closet relaunched our MSM/Queer Men&apos;s Empowerment Groups in 2023, marking a successful year of providing essential support. Our social support groups for HIV-positive men offer a vital lifeline by reducing the isolation and alienation often associated with this condition. These groups create a safe and empathetic environment where individuals can openly share their experiences, emotions, and fears without judgment, fostering a sense of belonging and reducing the emotional burden of living with HIV.</p><p>By challenging HIV-related stigma, these groups help build self-esteem and empower participants to become advocates for awareness and education. Practical benefits such as shared information, coping strategies, and skills for managing HIV-related challenges further enhance participants&#39; well-being. The sense of community developed within these groups plays a crucial role in improving the overall quality of life for HIV-positive men.</p><p>In essence, our support groups provide a haven where shared experiences and emotional support combat isolation and stigma, while also offering practical knowledge and fostering a sense of community. This combination ultimately contributes to enhanced well-being and quality of life for those living with HIV. Our groups are engaging and fun, incorporating creative activities to build camaraderie. Each session includes a reflective segment that addresses our experiences as queer men and the intersectionality of the issues we face, all within the respectful and cohesive framework of group therapy.</p>",
                    icon: <CounselingIcon />,
                    color: theme.palette.primary.main,
                };
                break;
            case "clothing":
                data = {
                    title: "Clothing",
                    subtitle:
                        "Out My Closet&#39;s Elevate Mobile POP-UP Boutiques: A Journey of Compassion and Empowerment",
                    description:
                        "<p>Out My Closet&#39;s Mobile POP-UP Shops create a sanctuary of hope and acceptance where vulnerable and marginalized clients obtain critical resources set against a backdrop of elevated luxurious style. Our pop-up boutiques become beacons of light, welcoming all with open arms. Each visit is a transformative experience, where individuals leave not just with bags of goods, but with renewed hope and a sense of belonging.</p><p>The quality of our offerings is unparalleled, handpicked to provide not just essentials, but items that inspire confidence and joy. From trendy clothing and accessories to essential hygiene products, each item is selected with love and care, ensuring that every participant feels valued and seen. Our range includes chic, high-quality attire that allows individuals to express their true selves. Beyond practical essentials that bring comfort, we offer shoes, cosmetics, personal care items, and accessories that add a touch of sparkle to their journey.</p><p>Our clients are diverse, under-resourced, and unhoused LGBTQ+ youth and adults, transgender women of color, domestic violence survivors, asylum seekers, and refugees. They come from all walks of life, united by a common thread of seeking dignity, support, and community.</p><p>The impact of our Mobile POP-UP Boutiques extends far beyond the tangible. Participants walk away with more than just new outfits and supplies—they gain a boost of self-esteem, a reminder of their inherent worth, and a glimpse of a brighter future. The trauma and anxiety that often accompany their journeys are met with compassion and understanding, replaced by empowerment and strength.</p><p>For over a decade, Out My Closet has been more than just a place to receive necessities—it is a celebration of humanity, a testament to the power of community, and a beacon of hope for all who walk through their doors.Join us in this mission of love and support, and witness the incredible impact we make together, one pop- up boutique at a time.</p>",
                    icon: <HangerIcon />,
                    color: theme.palette.primary.accent,
                };
                break;
            case "education":
                data = {
                    title: "Education",
                    subtitle: "Immersive Internship Leadership Program",
                    description:
                        "<p>Out My Closet offers specialized educational internships for under-resourced LGBTQ+ students interested in Public Health & Social Services through its Immersive Internship Leadership Program. This 30-week intensive training program covers several key areas. In Advocacy, interns participate in backend and in-person client services, sorting and prepping donations for distribution, and engaging in pop-up shops to directly support clients. They gain skills in Clinical Documentation, learning to write case notes, bio-psych-social assessments, and developing treatment plans. The program also includes Non-profit Development, where interns conduct grant research, writing, and participate in fundraising efforts. Interns acquire and practice counseling skills in Group and Individual Counseling sessions.</p><p>In Resource Mobilizing, interns coordinate care, learn about available services for clients, lead community business outreach and engagement, and organize clothing drive campaigns in their schools. Out My Closet's social justice vision is one of change, recognizing systemic disparities, identifying client-centered needs, and providing supplemental support with tangible resources and training to promote self-autonomy and self-efficacy.</p>",
                    icon: <EducationIcon />,
                    color: theme.palette.primary.accent3,
                };
                break;
            case "community":
                data = {
                    title: "Cyber Community",
                    description:
                        "<p>Out My Closet's social media empowerment campaigns are designed to amplify the voices and experiences of under-resourced and unhoused LGBTQ youth and adults. These campaigns highlight the resilience and creativity of transgender and gender-non-conforming individuals in South Florida and New York City. By sharing personal stories, promoting advocacy, and providing resources, Out My Closet aims to foster a supportive and inclusive online community. Their initiatives focus on reducing trauma and anxiety, raising awareness about the challenges faced by these communities, and advocating for systemic change. Through engaging content and collaborative partnerships, Out My Closet's social media presence empowers individuals, educates the public, and drives action towards a more equitable future. <a href='/campaigns'>OMC&apos;s Campaigns</a></p>",
                    icon: <CommunityIcon />,
                    color: theme.palette.primary.accent2,
                };
                break;
        }

        return (
            <div className={classes.serviceItem}>
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
                    {data.subtitle && (
                        <div className={classes.serviceSubtitle}>
                            {parse(data.subtitle)}
                        </div>
                    )}
                    <div className={classes.serviceDescription}>
                        {parse(data.description)}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <PublicContent margin>
                <SectionHeader title={"Our Social Services"} />

                <div className={classes.serviceContainer}>
                    <Grid item container spacing={5}>
                        <Grid item xs={12}>
                            {serviceItem("clothing")}
                        </Grid>
                        <Grid item xs={12}>
                            {serviceItem("counseling")}
                        </Grid>
                        <Grid item xs={12}>
                            {serviceItem("education")}
                        </Grid>
                        <Grid item xs={12}>
                            {serviceItem("community")}
                        </Grid>
                    </Grid>
                </div>

                <Grid
                    container
                    direction="row"
                    justifyContent={{ xs: "center" }}
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Link href={staticData.donationsUrl}>
                            <Button variant="contained" size="large">
                                Donate
                            </Button>
                        </Link>
                    </Grid>
                    {/* <Grid item>
                        <Button variant="contained" size="large">
                            Get Help
                        </Button>
                    </Grid> */}
                </Grid>
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

        h2: {
            fontSize: 30,
            fontWeight: 500,
        },

        p: {
            margin: "0 0 20px",
        },
    },
    serviceContainer: {
        margin: "40px 0",
    },
    serviceItem: {
        display: "flex",
        flexDirection: "row",
        color: theme.palette.primary.foregroundTint,
        marginBottom: 30,

        svg: {
            fontSize: 50,
        },

        "&:hover": {
            transition: "all 0.3s ease 0s",

            ".icon": {
                background: `linear-gradient(to bottom right,
                    ${theme.palette.primary.main},
                    ${theme.palette.primary.accent},
                    ${theme.palette.primary.accent2}
                ) !important`,
            },
        },

        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    },
    iconContainer: {
        marginRight: 20,

        [theme.breakpoints.down("md")]: {
            marginRight: 0,
        },
    },
    icon: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: "50%",
        color: theme.palette.secondary.foreground,
    },
    serviceData: {},
    serviceTitle: {
        color: theme.palette.primary.foregroundTint,
        fontSize: 25,
        fontWeight: 700,
        marginBottom: 5,
    },
    serviceSubtitle: {
        color: theme.palette.primary.foregroundTint,
        fontSize: 15,
        fontWeight: 700,
        marginBottom: 15,
    },
    serviceDescription: {
        fontSize: 15,
        lineHeight: 1.4,
    },
}));

export default ServicesComponent;
