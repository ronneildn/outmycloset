import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

import SectionHeader from './SectionHeader';
import UpdateCarousel from './UpdateCarousel';

const UpdatesSection = (props) => {

    const {classes} = useStyles(props);

    return (
        <section className={classes.container}>
            <div className={classes.margin}>
                <div className={classes.innerContainer}>
                    <SectionHeader
                        title={"What we've done lately"}
                    />

                    <UpdateCarousel />

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

        [theme.breakpoints.down('md')]: {

        },

        [theme.breakpoints.down('sm')]: {
            padding: "50px 10px",
        }
    },
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.secondary.foreground,
        background: `linear-gradient(to bottom right,
            ${theme.palette.primary.main},
            ${theme.palette.primary.accent},
            ${theme.palette.primary.accent2}
        )`,

        "h2": {
            color: theme.palette.secondary.foreground,
        }
    },
}));

export default UpdatesSection;
