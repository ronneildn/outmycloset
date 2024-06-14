import {Fragment} from 'react';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import classNames from "classnames";

import SectionHeader from '../Presentation/SectionHeader';

const MerchSection = (props) => {

    const {classes} = useStyles(props);

    return (
        <section className={classes.container}>
            <div className={classes.background} style={{backgroundImage: "url('/img/influencer.jpg')"}}>
            </div>
            <div className={classes.margin}>
                <div className={classes.innerContainer}>
                    <SectionHeader
                        title={"Check out our Merch"}
                        subTitle={"Help support our ongoing mission by purcahsing from our store."}
                    />


                </div>
            </div>
            <div className={classes.buttonPanel}>
                <Button variant="contained" size="large">Shop Now</Button>
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

        }
    },
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.background,
        color: theme.palette.secondary.foreground,
        position: "relative",
        minHeight: 500,


        "h2": {
            color: theme.palette.secondary.foreground,
        }
    },
    background: {
        backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: "100%",
    },
    innerContainer: {
        position: "relative"
    },
    buttonPanel: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: 50
    }
}));

export default MerchSection;
