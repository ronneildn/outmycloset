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
                                        {!!item.gallery.length && (
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
                    OMC realizes that people affected by HIV/AIDS are living
                    with the virus. We will have ongoing campaigns of
                    testimonials from health care professionals and those living
                    with the virus. It&apos;s TIME to STOP the clock of HIV
                    stigma. Out My Closet shares stories of support to diminish
                    the taboos, negative connotations and the HIV-ism that
                    PEOPLE who are LIVING with HIV face.
                </p>
                <p>
                    Youth aged 13 to 24 accounted for an estimated 26% of all
                    new HIV infections in the United States in 2010. Most new
                    HIV infections among youth occur among gay and bisexual
                    males; there was a 22% increase in estimated new infections
                    in this group from 2008 to 2010. Almost 60% of youth with
                    HIV in the United States do not know they are infected.
                    Youth in the United States account for a substantial number
                    of HIV infections. Gay, bisexual, and other men who have sex
                    with men account for most new infections in the age group 13
                    to 24; black/African American or Hispanic/Latino gay and
                    bisexual men are especially affected. Continual HIV
                    prevention outreach and education efforts, including
                    programs on abstinence, delaying the initiation of sex, and
                    negotiating safer sex for the spectrum of sexuality among
                    youth are urgently needed for a new generation at risk.
                </p>
            </div>
        ),
        gallery: [
            "/img/img_OMC365_2.jpg",
            "/img/img_OMC365_3.jpg",
            "/img/img_OMC365_4.jpg",
            "/img/img_OMC365_5.jpg",
            "/img/img_OMC365_6.jpg",
            "/img/img_OMC365_7.jpg",
            "/img/img_OMC365_8.jpg",
        ],
        hash: "#OMC365",
    },
    {
        name: "OMC Transform",
        imgUrl: "/img/graphic_OMCtransform.png",
        html: (
            <div>
                <p>
                    OMC Transform are stories of support and experiences
                    directed to impact the Trans community offering hope and
                    empowerment. These campaigns offer testimonials from Trans
                    people as they share intimate stories of the challenges
                    which they face during the steps of their transition,
                    discrimination, transphobia and other biases and hate but
                    more so the experiences and values of living in their
                    absolute truths.
                </p>
                <p>
                    The 2011 Hate Violence Report from the National Coalition of
                    Anti-Violence Projects shows anti-LGBT hate crime murders
                    increased 11% from 2010, in which 27 murders occurred, to
                    2011, in which 30 murders occurred. Of the victims murdered,
                    87% were people of color, and 40% were transgender women.
                    Transgender people of color were also 28% more likely to
                    experience physical violence compared to people who were not
                    transgender people of color. Transgender people of color
                    were also 28% more likely to experience physical violence
                    compared to people who were not transgender people of color.
                </p>
            </div>
        ),
        gallery: [],
    },
    {
        name: "#BYEH8R",
        imgUrl: "/img/graphic_OMCbyeh8r.png",
        html: (
            <div>
                <p>
                    &quot;#BYEH8R&quot; is OMC&apos;s anti-bullying campaign in
                    which we enforce that there is no room in our schools and
                    our lives for HOMOPHOBIA/HOMONEGATIVISM or any other form of
                    discrimination and H8. We are strongly saying &quot;GOOD
                    BYE&quot; to the HATE in our schools and shutting H8 out. We
                    engage with students by offering them awareness in terms on
                    which they can understand the impact of H8 speech and
                    actions.
                </p>
                <p>
                    LGBTQ youth deal with bullying in the form of violence,
                    harassment (including cyber-bullying), and attacks. Students
                    who constantly heard bigoted verbal abuse from name-calling
                    like &quot;homo&quot;, &quot;fag&quot; or &quot;sissy&quot;
                    more than two dozen times per day, which is one derogatory
                    comment every fifteen minutes of each day.
                </p>
            </div>
        ),
        gallery: [],
    },
    {
        name: "OMC Heeling Words",
        imgUrl: "/img/graphic_OMCheelingwords.png",
        html: (
            <div>
                <p>
                    OMC &quot;Heeling Words&quot; is the real behind the scenes
                    interviews from the Drag Entertainers we adore. &quot;Big
                    Heels, Big Hair, Big Hearts! We get an in depth look into
                    the lives and the stories behind the makeup, the hair and
                    listen to their hearts. Heeling Words is a campaign which
                    allows us to hear the stories leading up to drag stardom.
                </p>
                <p>
                    While drag is very much associated with gay men and gay
                    culture, there are drag artists of all genders and
                    sexualities who do drag for various reasons or purposes.
                    Generally drag queens are males who dress and act in a
                    female gender role, often exaggerating certain
                    characteristics (such as make-up and eyelashes) for comic,
                    dramatic or satirical effect.
                </p>
            </div>
        ),
        gallery: [],
    },
    {
        name: "OMC Empower",
        imgUrl: "/img/graphic_OMCempower.png",
        html: (
            <div>
                <p>
                    OMC Empower is OMC&apos;s campaign which offers words of
                    enrichment and encouragement from the LGBTQ community and
                    its allies. OMC offers supportive words from experienced
                    based presenters. &quot;OMC EMPOWER&quot; are real life
                    accounts of perseverance and emotional vulnerability in
                    hopes that the sharing of one&apos;s experiences will offer
                    solidarity. These topics may include coming out, overcoming
                    suicide, depression, self-mutilation, surviving
                    homelessness, spirituality reconciliation, and other stories
                    of resilience.
                </p>
                <p>
                    Researchers have found that the attempted suicide rates
                    &#38; suicidal ideations among lesbian, gay, bisexual,
                    transgender, queer and questioning youth is comparatively
                    higher than among the general population. LGBTQ teens and
                    young adults have one of the highest rates of suicide
                    attempts. We have created specialized campaigns that will
                    serve to bring healing and support to our LGBTQ members.
                </p>
            </div>
        ),
        gallery: [],
    },
    {
        name: "OMC Glare",
        imgUrl: "/img/graphic_OMCglare.png",
        html: (
            <div>
                <p>
                    LGBT youth can suffer from self-esteem and identity issues.
                    These issues are complicated and can be precursors to
                    substance abuse. The lack of social acceptance that LGBT
                    youth experience can lead to dangerous behavior. LGBT youth
                    experience higher rates of cigarette, alcohol and marijuana
                    use, as well as other drugs. Research done by the University
                    of Pittsburgh found that LGBT youth are 190% more likely to
                    resort to substance abuse, including an increase of 340% for
                    bisexual youth and 400% for lesbian youth. When LGBT youth
                    use drugs to deal with their pain, mental health issues can
                    be aggravated. LGBT youth, especially male youth, can resort
                    to criminal behavior as a way to escape the pain which they
                    feel or to feed their addiction. Some youth drop out of
                    school, run away or end up homeless when experiencing LGBT
                    issues, especially when they are rejected by their family
                    and peers. Out My Closet&apos;s &quot;GLARE,&quot; builds
                    affirming media campaigns focused on the LGBTQ youth
                    population and substance abuse.
                </p>
            </div>
        ),
        gallery: [],
    },
];
