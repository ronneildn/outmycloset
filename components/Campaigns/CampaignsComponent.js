"use client";
import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

import PublicContent from "../Layout/PublicContent";
import Header from "../Presentation/Header";
import SectionHeader from "../Presentation/SectionHeader";
import CampaignCarousel from "./CampaignCarousel";
import staticData from "@/constants/data";

const CamapignsComponent = (props) => {
    const { classes } = useStyles(props);
    const theme = useTheme();
    const router = useRouter();

    const campaigns = CAMPAIGNSDATA;

    const donateHandler = () => {
        router.push(staticData.donationsUrl);
    };

    return (
        <div className={classes.root}>
            <PublicContent
                style={{ backgroundColor: theme.palette.secondary.background }}
            >
                <div className={classes.campaignSummary}>
                    <Header title={"Our Campaigns"} />

                    <div className={classes.campaignsContainer}>
                        <Grid container spacing={2}>
                            {campaigns.map((item, index) => (
                                <Grid item xs={4} md={2} key={index}>
                                    <a href={`#${item.name}`}>
                                        <img
                                            className={classes.campaignImage}
                                            src={item.imgUrl}
                                            alt={item.name}
                                        />
                                        <div className={classes.campaignTitle}>
                                            {item.name}
                                        </div>
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>

                <div className={classes.campaignsContentContainer}>
                    {campaigns.map((item, index) => (
                        <div
                            className={classes.campaign}
                            id={item.name}
                            key={index}
                        >
                            <SectionHeader title={item.name} />
                            <div className={classes.content}>
                                <div className={classes.imageContainer}>
                                    <img src={item.imgUrl} alt={item.name} />
                                </div>
                                <div className={classes.textContainer}>
                                    <div>{item.html}</div>
                                    <div className={classes.galleryContainer}>
                                        {!!item.gallery?.length && (
                                            <CampaignCarousel
                                                images={item.gallery}
                                            />
                                        )}
                                    </div>
                                    <div className={classes.buttonPanel}>
                                        <div className={classes.hash}>
                                            {item.hash}
                                        </div>
                                        <div>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                onClick={donateHandler}
                                            >
                                                Donate
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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

        h1: {
            fontSize: 30,
            fontWeight: 500,
        },

        h2: {
            fontSize: 25,
            fontWeight: 500,
            textTransform: "uppercase",
        },

        p: {
            margin: "0 0 20px",
        },
    },
    campaignSummary: {
        backgroundColor: theme.palette.secondary.background,
        color: theme.palette.secondary.foreground,
        marginBottom: 40,
    },

    campaignsContainer: {},
    campaignImage: {
        width: "100%",
        borderRadius: 5,
    },
    campaignTitle: {
        color: theme.palette.secondary.foreground,
        textAlign: "center",
        fontWeight: 700,
        marginBottom: 5,
        textTransform: "uppercase",
    },

    campaignsContentContainer: {
        backgroundColor: theme.palette.primary.background,
        color: theme.palette.primary.foreground,
        width: "100%",
        maxWidth: theme.size.pageMaxWidth,
        borderRadius: 5,
        padding: 40,
    },
    campaign: {
        marginBottom: 50,
        paddingBottom: 50,
        borderBottom: `1px solid ${theme.palette.secondary.foregroundTint}`,

        "&:last-child": {
            borderBottom: 0,
        },
    },
    content: {
        display: "flex",
        flexDirection: "row",

        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    },
    imageContainer: {
        flex: "0 1 30%",
        paddingRight: 20,

        img: {
            width: "100%",
            borderRadius: 5,
            border: `2px solid ${theme.palette.primary.foreground}`,
        },

        [theme.breakpoints.down("md")]: {
            paddingRight: 0,
        },
    },
    textContainer: {
        flex: "1 1 0%",
    },
    buttonPanel: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        background: "#ededed",
        borderRadius: 10,
        padding: 10,
        margin: "10px 0",
    },
    hash: {
        fontSize: 20,
        fontWeight: 700,
        color: theme.palette.primary.foregroundTint,
        flex: "1 1 0%",
        paddingRight: 10,
    },
}));

export default CamapignsComponent;

const CAMPAIGNSDATA = [
    {
        name: "OMC 365",
        imgUrl: "/img/graphic_OMC365.png",
        html: (
            <div>
                <p>
                    &quot;OMC 365&quot; is Out My Closet&apos;s dynamic social
                    media campaign dedicated to reducing HIV stigma, with a
                    particular focus on queer men of color. This initiative
                    seeks to address and dismantle the harmful stereotypes and
                    misinformation that disproportionately affect Black and
                    Latino young gay men. According to the CDC, Black and Latino
                    men who have sex with men accounted for 39% and 30% of new
                    HIV diagnoses, respectively, in the United States in recent
                    years. By sharing empowering stories, educational content,
                    and providing resources, OMC 365 aims to create a supportive
                    community, promote awareness, and foster an environment of
                    acceptance and understanding. Join us in the fight to end
                    HIV stigma and support the health and well-being of queer
                    men of color.
                </p>
            </div>
        ),
        // gallery: [
        //     "/img/img_OMC365_2.jpg",
        //     "/img/img_OMC365_3.jpg",
        //     "/img/img_OMC365_4.jpg",
        //     "/img/img_OMC365_5.jpg",
        //     "/img/img_OMC365_6.jpg",
        //     "/img/img_OMC365_7.jpg",
        //     "/img/img_OMC365_8.jpg",
        // ],
        hash: "#OMC365",
    },
    {
        name: "OMC Transform",
        imgUrl: "/img/graphic_OMCtransform.png",
        html: (
            <div>
                <p>
                    &quot;OMC TRANSFORM&quot; is Out My Closet&apos;s inspiring
                    social media campaign aimed at educating and empowering
                    transgender youth. By sharing powerful stories of resilience
                    and empowerment from transgender and gender non-conforming
                    people of color, this initiative highlights the strength and
                    courage of individuals with lived experiences. &quot;OMC
                    TRANSFORM&quot; seeks to provide a platform for these
                    voices, offering education, support, and visibility.
                    Alarmingly, the Human Rights Campaign reports that in 2020,
                    at least 44 transgender or gender non-conforming people,
                    most of them transgender women of color, were violently
                    killed in the U.S. Through these shared narratives, the
                    campaign aims to build a more inclusive and understanding
                    community, fostering acceptance and celebrating the
                    diversity and resilience of transgender youth. Join us in
                    amplifying these voices and supporting the empowerment of
                    transgender and gender non-conforming individuals.
                </p>
            </div>
        ),
        gallery: [],
        hash: "#OMCTransform",
    },
    {
        name: "#BYEH8R",
        imgUrl: "/img/graphic_OMCbyeh8r.png",
        html: (
            <div>
                <p>
                    &quot;OMC&apos;s BYH8R (BYE HATER)&quot; is OMC&apos;s
                    impactful social media campaign dedicated to addressing and
                    dismantling homophobia and transphobia within school
                    settings. By collaborating with Student Government
                    Association (SGA) bodies, OMC initiates programs such as
                    clothing drives and allyship building activities. According
                    to GLSEN&apos;s National School Climate Survey, 70.1% of
                    LGBTQ students reported being verbally harassed, and 28.9%
                    were physically harassed in the past year due to their
                    sexual orientation. This campaign aims to create safer, more
                    inclusive environments for LGBTQ students by promoting
                    understanding, acceptance, and active support. Through
                    engaging content and community-driven initiatives,
                    &quot;OMC&apos;s BYH8R&quot; strives to eliminate
                    discrimination and foster a culture of respect and equality
                    in schools. Join us in saying &quot;BYE&quot; to hate and
                    building a brighter, more inclusive future for all students.
                </p>
            </div>
        ),
        gallery: [],
        hash: "#OMCBYH8R",
    },
    {
        name: "OMC Heeling Words",
        imgUrl: "/img/graphic_OMCheelingwords.png",
        html: (
            <div>
                <p>
                    &quot;OMC&apos;s HEELING WORDS&quot; is Out My Closet&apos;s
                    captivating social media campaign featuring heartfelt
                    interviews with many prominent drag entertainers. This
                    series offers an intimate glimpse into the lives of
                    well-known queens, including RuPaul&apos;s Drag Race
                    contestants like Bianca Del Rio, Bob The Drag Queen, Ginger
                    Minj, BenDeLaCreme, and Cynthia Lee Fontaine, as well as
                    other celebrated performers such as Harmonica Sunbeam and
                    Vikki Vox. These personal stories reveal their journeys of
                    coming out, overcoming hardships, and navigating obstacles,
                    providing a genuine look beneath the wigs. Through
                    &quot;OMC&apos;s HEELING WORDS,&quot; we celebrate the
                    resilience, strength, and artistry of these incredible
                    individuals while fostering understanding and acceptance
                    within the LGBTQ community and beyond. Join us in listening
                    to their inspiring tales and honoring their contributions to
                    the world of drag.
                </p>
            </div>
        ),
        gallery: [],
        hash: "#OMCHeelingWords",
    },
    {
        name: "OMC Glare",
        imgUrl: "/img/graphic_OMCglare.png",
        html: (
            <div>
                <p>
                    &quot;OMC&apos;s GLARE (GLBT ADDICTION RECOVERY
                    EMPOWERMENT)&quot; is Out My Closet&apos;s poignant social
                    media campaign focusing on intimate and personal stories of
                    overcoming addiction within the LGBTQ community. These
                    narratives delve into the circumstances that lead to
                    addiction, experiences of relapsing, and journeys of
                    personal growth and recovery. According to the National
                    Institute on Drug Abuse, LGBTQ individuals are more than
                    twice as likely as their heterosexual peers to experience
                    substance abuse. Through &quot;OMC&apos;s GLARE,&quot; we
                    aim to shed light on these challenges, provide support, and
                    inspire others with stories of resilience and empowerment.
                    Join us in raising awareness, breaking the stigma, and
                    championing the recovery journeys of LGBTQ individuals.
                </p>
            </div>
        ),
        gallery: [],
        hash: "#OMCGlare",
    },
    {
        name: "OMC Empower",
        imgUrl: "/img/graphic_OMCempower.png",
        html: (
            <div>
                <p>
                    &quot;OMC&apos;s EMPOWER&quot; is Out My Closet&apos;s
                    heartfelt social media campaign offering testimonials and
                    support from LGBTQ community members and allies to LGBTQ
                    youth facing challenges, hardships, and the difficulties of
                    coming out. This initiative also provides vital support for
                    those contemplating suicide. Alarmingly, according to The
                    Trevor Project, LGBTQ youth are more than four times as
                    likely to attempt suicide compared to their peers. Through
                    &quot;OMC&apos;s EMPOWER,&quot; we share stories of
                    resilience, provide resources, and create a supportive
                    network to help LGBTQ youth navigate their struggles and
                    find hope. Join us in fostering a community of
                    understanding, acceptance, and empowerment, and in making a
                    difference in the lives of LGBTQ youth.
                </p>
            </div>
        ),
        gallery: [],
        hash: "#OMCEmpower",
    },
];
