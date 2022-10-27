import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


import PublicContent from '../Layout/PublicContent';
import Header from '../Presentation/Header';
import SectionHeader from '../Presentation/SectionHeader';

const CamapignsComponent = (props) => {

    const {classes} = useStyles(props);
    const theme = useTheme();

    const campaigns = CAMPAIGNSDATA;

    return (
        <div className={classes.root}>
            <PublicContent style={{backgroundColor: theme.palette.secondary.background}}>
                <div className={classes.campaignSummary}>
                    <Header
                        title={"Our Campaigns"}
                    />

                    <div className={classes.campaignsContainer}>
                        <Grid container spacing={2}>
                            {
                                campaigns.map((item, index) => (

                                    <Grid item xs={4} md={2}>
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
                                ))
                            }
                        </Grid>
                    </div>
                </div>

                <div className={classes.campaignsContentContainer}>
                    {
                        campaigns.map((item, index) => (
                            <div className={classes.campaign} id={item.name}>
                                <SectionHeader
                                    title={item.name}
                                />
                                <div className={classes.content}>
                                    <div className={classes.imageContainer}>
                                        <img
                                            src={item.imgUrl}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className={classes.textContainer}>
                                        <div>
                                            {item.html}
                                        </div>
                                        <div className={classes.galleryContainer}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
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

        "h1" : {
            fontSize: 30,
            fontWeight: 500,
        },

        "h2" : {
            fontSize: 25,
            fontWeight: 500,
        },

        "p": {
            margin: "0 0 20px"
        }
    },
    campaignSummary: {
        backgroundColor: theme.palette.secondary.background,
        color: theme.palette.secondary.foreground,
        marginBottom: 40
    },

    campaignsContainer: {

    },
    campaignImage: {
        width: "100%",
        borderRadius: 5
    },
    campaignTitle: {
        color: theme.palette.secondary.foreground,
        textAlign: "center",
        fontWeight: 700,
        marginBottom: 5
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
            borderBottom: 0
        }
    },
    content: {
        display: "flex",
        flexDirection: "row",

        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
        }
    },
    imageContainer: {
        flex: "0 1 30%",
        paddingRight: 20,

        "img": {
            width: "100%",
            borderRadius: 5,
            border: `2px solid ${theme.palette.primary.foreground}`
        },

        [theme.breakpoints.down('md')]: {
            paddingRight: 0,
        }
    },
    textContainer: {
        flex: "1 1 0%",
    }
}));

export default CamapignsComponent;

const CAMPAIGNSDATA = [
    {
        name: "OMC 365",
        imgUrl: "/img/graphic_OMC365.png",
        html: <div>
            <p>OMC realizes that people affected by HIV/AIDS are living with the virus. We will have ongoing campaigns of testimonials from health care professionals and those living with the virus. It's TIME to STOP the clock of HIV stigma. Out My Closet shares stories of support to diminish the taboos, negative connotations and the HIV-ism that PEOPLE who are LIVING with HIV face.</p>
            <p>Youth aged 13 to 24 accounted for an estimated 26% of all new HIV infections in the United States in 2010. Most new HIV infections among youth occur among gay and bisexual males; there was a 22% increase in estimated new infections in this group from 2008 to 2010. Almost 60% of youth with HIV in the United States do not know they are infected. Youth in the United States account for a substantial number of HIV infections. Gay, bisexual, and other men who have sex with men account for most new infections in the age group 13 to 24; black/African American or Hispanic/Latino gay and bisexual men are especially affected. Continual HIV prevention outreach and education efforts, including programs on abstinence, delaying the initiation of sex, and negotiating safer sex for the spectrum of sexuality among youth are urgently needed for a new generation at risk.</p>
        </div>,
        gallery: []
    },
    {
        name: "OMC Transform",
        imgUrl: "/img/graphic_OMCtransform.png",
        html: <div>
            <p>OMC realizes that people affected by HIV/AIDS are living with the virus. We will have ongoing campaigns of testimonials from health care professionals and those living with the virus. It's TIME to STOP the clock of HIV stigma. Out My Closet shares stories of support to diminish the taboos, negative connotations and the HIV-ism that PEOPLE who are LIVING with HIV face.</p>
            <p>Youth aged 13 to 24 accounted for an estimated 26% of all new HIV infections in the United States in 2010. Most new HIV infections among youth occur among gay and bisexual males; there was a 22% increase in estimated new infections in this group from 2008 to 2010. Almost 60% of youth with HIV in the United States do not know they are infected. Youth in the United States account for a substantial number of HIV infections. Gay, bisexual, and other men who have sex with men account for most new infections in the age group 13 to 24; black/African American or Hispanic/Latino gay and bisexual men are especially affected. Continual HIV prevention outreach and education efforts, including programs on abstinence, delaying the initiation of sex, and negotiating safer sex for the spectrum of sexuality among youth are urgently needed for a new generation at risk.</p>
        </div>,
        gallery: []
    },
    {
        name: "#BYEH8R",
        imgUrl: "/img/graphic_OMCbyeh8r.png",
        html: <div>
            <p>OMC realizes that people affected by HIV/AIDS are living with the virus. We will have ongoing campaigns of testimonials from health care professionals and those living with the virus. It's TIME to STOP the clock of HIV stigma. Out My Closet shares stories of support to diminish the taboos, negative connotations and the HIV-ism that PEOPLE who are LIVING with HIV face.</p>
            <p>Youth aged 13 to 24 accounted for an estimated 26% of all new HIV infections in the United States in 2010. Most new HIV infections among youth occur among gay and bisexual males; there was a 22% increase in estimated new infections in this group from 2008 to 2010. Almost 60% of youth with HIV in the United States do not know they are infected. Youth in the United States account for a substantial number of HIV infections. Gay, bisexual, and other men who have sex with men account for most new infections in the age group 13 to 24; black/African American or Hispanic/Latino gay and bisexual men are especially affected. Continual HIV prevention outreach and education efforts, including programs on abstinence, delaying the initiation of sex, and negotiating safer sex for the spectrum of sexuality among youth are urgently needed for a new generation at risk.</p>
        </div>,
        gallery: []
    },
    {
        name: "OMC Heeling Words",
        imgUrl: "/img/graphic_OMCheelingwords.png",
        html: <div>
            <p>OMC realizes that people affected by HIV/AIDS are living with the virus. We will have ongoing campaigns of testimonials from health care professionals and those living with the virus. It's TIME to STOP the clock of HIV stigma. Out My Closet shares stories of support to diminish the taboos, negative connotations and the HIV-ism that PEOPLE who are LIVING with HIV face.</p>
            <p>Youth aged 13 to 24 accounted for an estimated 26% of all new HIV infections in the United States in 2010. Most new HIV infections among youth occur among gay and bisexual males; there was a 22% increase in estimated new infections in this group from 2008 to 2010. Almost 60% of youth with HIV in the United States do not know they are infected. Youth in the United States account for a substantial number of HIV infections. Gay, bisexual, and other men who have sex with men account for most new infections in the age group 13 to 24; black/African American or Hispanic/Latino gay and bisexual men are especially affected. Continual HIV prevention outreach and education efforts, including programs on abstinence, delaying the initiation of sex, and negotiating safer sex for the spectrum of sexuality among youth are urgently needed for a new generation at risk.</p>
        </div>,
        gallery: []
    },
    {
        name: "OMC Empower",
        imgUrl: "/img/graphic_OMCempower.png",
        html: <div>
            <p>OMC realizes that people affected by HIV/AIDS are living with the virus. We will have ongoing campaigns of testimonials from health care professionals and those living with the virus. It's TIME to STOP the clock of HIV stigma. Out My Closet shares stories of support to diminish the taboos, negative connotations and the HIV-ism that PEOPLE who are LIVING with HIV face.</p>
            <p>Youth aged 13 to 24 accounted for an estimated 26% of all new HIV infections in the United States in 2010. Most new HIV infections among youth occur among gay and bisexual males; there was a 22% increase in estimated new infections in this group from 2008 to 2010. Almost 60% of youth with HIV in the United States do not know they are infected. Youth in the United States account for a substantial number of HIV infections. Gay, bisexual, and other men who have sex with men account for most new infections in the age group 13 to 24; black/African American or Hispanic/Latino gay and bisexual men are especially affected. Continual HIV prevention outreach and education efforts, including programs on abstinence, delaying the initiation of sex, and negotiating safer sex for the spectrum of sexuality among youth are urgently needed for a new generation at risk.</p>
        </div>,
        gallery: []
    },
    {
        name: "OMC Glare",
        imgUrl: "/img/graphic_OMCglare.png",
        html: <div>
            <p>OMC realizes that people affected by HIV/AIDS are living with the virus. We will have ongoing campaigns of testimonials from health care professionals and those living with the virus. It's TIME to STOP the clock of HIV stigma. Out My Closet shares stories of support to diminish the taboos, negative connotations and the HIV-ism that PEOPLE who are LIVING with HIV face.</p>
            <p>Youth aged 13 to 24 accounted for an estimated 26% of all new HIV infections in the United States in 2010. Most new HIV infections among youth occur among gay and bisexual males; there was a 22% increase in estimated new infections in this group from 2008 to 2010. Almost 60% of youth with HIV in the United States do not know they are infected. Youth in the United States account for a substantial number of HIV infections. Gay, bisexual, and other men who have sex with men account for most new infections in the age group 13 to 24; black/African American or Hispanic/Latino gay and bisexual men are especially affected. Continual HIV prevention outreach and education efforts, including programs on abstinence, delaying the initiation of sex, and negotiating safer sex for the spectrum of sexuality among youth are urgently needed for a new generation at risk.</p>
        </div>,
        gallery: []
    },
]
