import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

import PublicContent from '../Layout/PublicContent';
import SectionHeader from '../Presentation/SectionHeader';


const AboutComponent = (props) => {

    const {classes} = useStyles(props);

    return (
        <div className={classes.root}>
            <PublicContent>
                <div className={classes.aboutContainer}>
                    <SectionHeader
                        title={"Who is Out My Closet"}
                    />
                    <p>
                        Founded in 2013 by LGBTQ activist, Michael A. Narain, Out My Closet empowers displaced & under resourced LGBTQ youth with clothing, care and compassion and creates affirming multimedia messages of hope, inclusiveness & support. OMC services displaced youth who are in vulnerable and crucial states. OMC addresses immediate needs such as clothing and offers referrals to agencies where shelter and food are provided. OMC conducts its services in mannerisms that uplifts, motivates and reinforce displaced youth. We reinforce validation and acceptance of sexual identity and gender expression. We also work with other agencies and organizations to offer consciousness on the needs of the LGBTQ community.
                    </p>
                </div>
                <div className={classes.aboutContainer}>
                    <SectionHeader
                        title={"About The Founder"}
                    />
                    <div className={classes.innerContainer}>
                        <div className={classes.imageContainer}>
                            <img

                                alt="Founder Michael Narain"
                                src="/img/img_MichaelNarain.jpg"
                            />
                        </div>
                        <p>
                            Out My Closet's Founder, Michael Narain's life has been weaved with the passion of two things, the love of aesthetics and a love of humanity. Michael has fostered his love for the arts and pursued a degree at Hunter College attaining a BA in Media Communications while minoring in Theater. He then decided to continue his education at the Fashion Institute of Technology where he concentrated directly on Integrated Marketing Communications.
                        </p>
                        <p>
                            In 2010 Michael obtained credentialing in the Advocacy for Victims of Sexual Assault and Substance Abuse Counseling which allowed him opportunities in intensive outpatient treatment for mentally ill and chemically addicted persons. Michael continued in the Vein of Substance Abuse Counseling where he continued working with an outpatient agency for high-crisis adolescents.
                        </p>
                        <p>
                            Within the last five years Michael has taken an adamant role as artist, advocate and philanthropist by supporting other agencies that foster life changing actions to those who are under served and victimized.
                        </p>
                        <p>
                            In November of 2013 Michael initiated his own organization, "Out My Closet," which serves displaced and under resourced LGBTQ youth in New York City. Michael uses his gift of creativity to produce uplifting media campaigns that support the LGBTQ population at large with messages of hope, empowerment and resilience.
                        </p>
                        <p>
                            Out My Closet's reach has gone as far as Los Angeles and internationally to South America. The organization has donated thousands of articles of clothing and continues to touch lives through its social media campaigns. "Out My Closet is my biggest accomplishment yet. Uplifting and supporting lives torn by homophobia and homo-negativism is something I strongly feel called to do. Each year we will expand our reach until hope is synonymous with our name."
                        </p>
                    </div>
                </div>
            </PublicContent>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.background,

        "h2" : {
            fontSize: 30,
            fontWeight: 500,
        },

        "p": {
            margin: "0 0 20px"
        }
    },
    aboutContainer: {
        padding: 40
    },
    innerContainer: {

    },
    imageContainer: {
        width: 250,
        float:" left",
        padding: "0 20px 20px 0",

        "img" : {
            width: "100%",
            borderRadius: 10
        }
    }
}));

export default AboutComponent;
