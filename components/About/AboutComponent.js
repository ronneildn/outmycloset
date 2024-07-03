"use client";
import { Fragment } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";

import PublicContent from "../Layout/PublicContent";
import SectionHeader from "../Presentation/SectionHeader";

const AboutComponent = (props) => {
    const { classes } = useStyles(props);

    return (
        <div className={classes.root}>
            <PublicContent margin>
                <div className={classes.aboutContainer}>
                    <SectionHeader title={"Why we exist"} />
                    <p>
                        On November 11, 2013, Out My Closet was started in
                        response to the tragic suicide of a gay youth patient of
                        our founder, Michael Narain, who faced many challenges
                        while being unhoused, including mental, physical,
                        emotional, and sexual trauma.
                    </p>

                    <p>
                        Many LGBTQ youth who are kicked out or flee toxic
                        environments, run away with very few clothing resources,
                        often just what they can fit into a backpack. While
                        living on the streets, these items become soiled,
                        outgrown, seasonally inappropriate, or no longer align
                        with their gender identity. These kids may often engage
                        in risky behaviors like survival sex, just to have their
                        basic needs met.
                    </p>

                    <p>
                        To address these needs, Out My Closet&apos;s mobile
                        Pop-Up Shop was created as a lifeline for unhoused and
                        under-resourced LGBTQ+ youth.
                    </p>

                    <p>
                        Out My Closet&apos;s mobile Pop-Up Shop brings a wealth
                        of resources directly to shelters, drop-in programs,
                        colleges, and community-based organizations serving
                        unhoused and under-resourced LGBTQ+ youth and adults in
                        New York City and South Florida. We offer an extensive
                        variety of gender-affirming clothing, shoes,
                        accessories, cosmetics, and personal hygiene products.
                        Our model ensures a beautiful, safe, and dignified
                        shopping experience, fostering inclusivity and
                        self-worth among marginalized communities.
                    </p>

                    <p>
                        Our Pop-Up Shop Models are designed to be more than just
                        a place to pick up essentials—they are a celebration of
                        individuality and style. Each shop features a diverse
                        range of items in various sizes and styles, meticulously
                        curated to meet the unique needs and preferences of our
                        clients. From trendy outfits to timeless classics, we
                        provide options that allow everyone to express their
                        true selves with confidence.
                    </p>

                    <p>
                        The beauty of our Pop-Up Shops lies not only in the
                        products we offer but also in the welcoming and
                        supportive atmosphere we create. Every detail, from the
                        layout to the lighting, is thoughtfully designed to
                        mimic the experience of shopping in a high-end boutique,
                        ensuring that every visitor feels valued and respected.
                        By transforming the shopping experience, we help to
                        elevate the self-esteem and sense of belonging for those
                        who need it most.
                    </p>
                </div>
                {/* <div className={classes.aboutContainer}>
                    <SectionHeader title={"About The Founder"} />
                    <div className={classes.innerContainer}>
                        <div className={classes.imageContainer}>
                            <img
                                alt="Founder Michael Narain"
                                src="/img/img_MichaelNarain.jpg"
                            />
                        </div>
                        <p>
                            Out My Closet&apos;s Founder, Michael Narain&apos;s
                            life has been weaved with the passion of two things,
                            the love of aesthetics and a love of humanity.
                            Michael has fostered his love for the arts and
                            pursued a degree at Hunter College attaining a BA in
                            Media Communications while minoring in Theater. He
                            then decided to continue his education at the
                            Fashion Institute of Technology where he
                            concentrated directly on Integrated Marketing
                            Communications.
                        </p>
                        <p>
                            In 2010 Michael obtained credentialing in the
                            Advocacy for Victims of Sexual Assault and Substance
                            Abuse Counseling which allowed him opportunities in
                            intensive outpatient treatment for mentally ill and
                            chemically addicted persons. Michael continued in
                            the Vein of Substance Abuse Counseling where he
                            continued working with an outpatient agency for
                            high-crisis adolescents.
                        </p>
                        <p>
                            Within the last five years Michael has taken an
                            adamant role as artist, advocate and philanthropist
                            by supporting other agencies that foster life
                            changing actions to those who are under served and
                            victimized.
                        </p>
                        <p>
                            In November of 2013 Michael initiated his own
                            organization, &quotOut My Closet,&quot which serves
                            displaced and under resourced LGBTQ youth in New
                            York City. Michael uses his gift of creativity to
                            produce uplifting media campaigns that support the
                            LGBTQ population at large with messages of hope,
                            empowerment and resilience.
                        </p>
                        <p>
                            Out My Closet&apos;s reach has gone as far as Los
                            Angeles and internationally to South America. The
                            organization has donated thousands of articles of
                            clothing and continues to touch lives through its
                            social media campaigns. &quotOut My Closet is my
                            biggest accomplishment yet. Uplifting and supporting
                            lives torn by homophobia and homo-negativism is
                            something I strongly feel called to do. Each year we
                            will expand our reach until hope is synonymous with
                            our name.&quot
                        </p>
                    </div>
                </div> */}
            </PublicContent>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.background,

        h2: {
            fontSize: 30,
            fontWeight: 500,
        },

        p: {
            margin: "0 0 20px",
        },
    },
    aboutContainer: {
        //padding: 40
    },
    innerContainer: {},
    imageContainer: {
        width: 250,
        float: " left",
        padding: "0 20px 20px 0",

        img: {
            width: "100%",
            borderRadius: 10,
        },
    },
}));

export default AboutComponent;
