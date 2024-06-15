import { useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";

import SectionHeader from "../Presentation/SectionHeader";
import UpdateCarousel from "./UpdateCarousel";

import useFetch from "@/hooks/useFetch";

const UpdatesSection = (props) => {
    const { classes } = useStyles(props);
    const [updates, setUpdates] = useState([]);
    const { loading, error, data } = useFetch("blogs/?populate=*");

    useEffect(() => {
        if (data?.error) {
            console.log("error");
            enqueueSnackbar("Sorry an error occured getting updates", {
                autoHideDuration: 3000,
                variant: "error",
            });
        } else if (data?.data) {
            console.log(data);
            setUpdates(data.data);
            console.log(updates);
        }
    }, [data, updates]);

    return (
        <section className={classes.container}>
            <div className={classes.margin}>
                <div className={classes.innerContainer}>
                    <SectionHeader title={"What we've done lately"} />

                    <UpdateCarousel data={updates} />
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

        [theme.breakpoints.down("md")]: {},

        [theme.breakpoints.down("sm")]: {
            padding: "50px 10px",
        },
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.secondary.foreground,
        background: `linear-gradient(to bottom right,
            ${theme.palette.primary.main},
            ${theme.palette.primary.accent},
            ${theme.palette.primary.accent2}
        )`,

        h2: {
            color: theme.palette.secondary.foreground,
        },
    },
}));

export default UpdatesSection;
