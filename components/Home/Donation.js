import { Fragment, useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";
import useFetch from "@/hooks/useFetch";

import Odometer from "../Presentation/Odometer";

const Donation = (props) => {
    const { classes } = useStyles(props);
    const [donationNumber, setDonationNumber] = useState(0);
    const url = `donation-numbers/?id=1`;
    const { loading, error, data } = useFetch(url);

    useEffect(() => {
        if (data?.error) {
            console.log("error");
            enqueueSnackbar("Sorry an error occured getting blog", {
                autoHideDuration: 3000,
                variant: "error",
            });
        } else if (data?.data) {
            setDonationNumber(data.data[0]?.attributes?.donations);
            //console.log(donationNumber);
        }
    }, [data, donationNumber]);

    return (
        <Fragment>
            <div className={classes.root}>
                {donationNumber > 0 && <Odometer value={donationNumber} />}

                <div className={classes.label}>Donated Items</div>
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 50,

        ".odometer": {
            backgroundColor: theme.palette.primary.accent2,
            color: theme.palette.secondary.background,
            borderRadius: 5,
            padding: 5,
        },

        ".odometer-digit": {
            //padding: "10px 5px",
            margin: 1,
            backgroundColor: theme.palette.primary.accent2,
            color: theme.palette.secondary.background,
            fontFamily: "'Gemunu Libre', sans-serif",
            fontSize: 60,
            fontWeight: 400,
            lineHeight: "55px !important",
            display: "flex",
        },

        [theme.breakpoints.down("md")]: {
            ".odometer-digit": {
                fontSize: 40,
            },
        },
    },
    label: {
        fontSize: 16,
        fontWeight: 700,
        textTransform: "uppercase",
    },
}));

export default Donation;
