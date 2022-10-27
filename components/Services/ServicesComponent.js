import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import CounselingIcon from '@mui/icons-material/SupervisorAccountRounded';
import HangerIcon from '@mui/icons-material/CheckroomRounded';
import CommunityIcon from '@mui/icons-material/GroupsRounded';
import EducationIcon from '@mui/icons-material/SchoolRounded';

import PublicContent from '../Layout/PublicContent';
import SectionHeader from '../Presentation/SectionHeader';

const ServicesComponent = (props) => {

    const {classes} = useStyles(props);
    const theme = useTheme();

    const serviceItem = (type) => {
        let data = {};

        switch (type) {
        case "counseling":
            data = {
                title: "Counseling",
                description: "OMC conducts group and individual counseling by trained and experienced individuals such as Social Workers, Clinicians, Life Coaches and other experienced counselors. Some of the group topics which we offer may include Art/Music Therapy, Physical Health and Mental health, Vocational/Educational training and career development, Life Skills, Family Therapy, Substance Abuse etc.",
                icon: <CounselingIcon />,
                color: theme.palette.primary.main,
            }
            break;
        case "clothing":
            data = {
                title: "Clothing",
                description: "OMC delivers new and lightly worn clothing to displaced and under resourced youth. We offer the styles and trends that are favorable to young adults and offer them in means of which are dignifying. We NEVER deliver items in garbage bags or boxes but rather create shopping like experiences where clients may sample our selection and take as many articles that they desire.",
                icon: <HangerIcon />,
                color: theme.palette.primary.accent,

            }
            break;
        case "community":
            data = {
                title: "Community",
                description: "OMC Community is a website interface which offers cyber safe places of engagement and support for LGBTQ youth. Participants can express themselves artistically and communicate interests relative to supporting and building healthy platonic relationships. This medium will also serve as a place which offer social service support and will give out local agencies of support for clients. The website will offer HOT LINE support for critical needs such as suicidal ideations deescalating conversations.",
                icon: <CommunityIcon />,
                color: theme.palette.primary.accent2,

            }
            break;
        case "education":
            data = {
                title: "Education",
                description: "OMC realizes that educating our youth is a key factor in minimizing homo-negativism and homophobic beliefs. OMC works with educators in their respective schools to initiate LGBTQ support groups or contribute to already existing groups. A collaborative effort is key factor in successfully minimizing discrimination in our school systems. OMC also works with LGBTQ groups to launch clothing drives and gather supportive testimonials from participants in these campus settings.",
                icon: <EducationIcon />,
                color: theme.palette.primary.accent3,

            }
            break;
        };

        return (
            <div className={classes.serviceItem}>
                <div className={classes.iconContainer}>
                    <div
                        className={classNames(classes.icon, "icon")}
                        style={{background: data.color}}
                    >
                        {data.icon}
                    </div>
                </div>
                <div className={classes.serviceData}>
                    <div className={classes.serviceTitle}>
                        {data.title}
                    </div>
                    <div className={classes.serviceDescription}>
                        {data.description}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <PublicContent margin>
                <SectionHeader
                    title={"Our Social Services"}
                />

                <div className={classes.serviceContainer}>

                    <Grid item container spacing={5} >
                        <Grid item xs={12}>
                            {serviceItem("counseling")}
                        </Grid>
                        <Grid item xs={12} >
                            {serviceItem("clothing")}
                        </Grid>
                        <Grid item xs={12} >
                            {serviceItem("community")}
                        </Grid>
                        <Grid item xs={12} >
                            {serviceItem("education")}
                        </Grid>
                    </Grid>
                </div>

                <Grid
                    container
                    direction="row"
                    justifyContent={{xs: "center"}}
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Button variant="contained" size="large">Donate</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" size="large">Get Help</Button>
                    </Grid>
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

        "h2" : {
            fontSize: 30,
            fontWeight: 500,
        },

        "p": {
            margin: "0 0 20px"
        }
    },
    serviceContainer: {
        margin: "40px 0"
    },
    serviceItem: {
        display: "flex",
        flexDirection: "row",
        color: theme.palette.primary.foregroundTint,
        marginBottom: 30,

        "svg": {
            fontSize: 50
        },

        "&:hover" : {
            transition: "all 0.3s ease 0s",


            ".icon" : {
                background: `linear-gradient(to bottom right,
                    ${theme.palette.primary.main},
                    ${theme.palette.primary.accent},
                    ${theme.palette.primary.accent2}
                ) !important`,
            }
        },

        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
        }
    },
    iconContainer: {
        marginRight: 20,

        [theme.breakpoints.down('md')]: {
            marginRight: 0,
        }
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
    serviceData: {

    },
    serviceTitle: {
        color: theme.palette.primary.foregroundTint,
        fontSize: 25,
        fontWeight: 700
    },
    serviceDescription: {
        fontSize: 14
    },
}));

export default ServicesComponent;
