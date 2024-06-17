"use client";
import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import classNames from "classnames";
import dynamic from "next/dynamic";
//import Odometer from "react-odometerjs";

let loadedCallback = null;
let loaded = false;

const Odometer = dynamic(
    async () => {
        const mod = await import("react-odometerjs");
        loaded = true;
        if (loadedCallback != null) {
            loadedCallback();
        }
        return mod;
    },
    {
        ssr: false,
        loading: () => 0,
    }
);

const OdometerComponent = (props) => {
    const { classes } = useStyles(props);
    const [odometerLoaded, setOdometerLoaded] = useState(loaded);
    const [odometerValue, setOdometerValue] = useState(0);

    loadedCallback = () => {
        setOdometerLoaded(true);
    };

    useEffect(() => {
        if (odometerLoaded) {
            setOdometerValue(1);
        }
    }, [odometerLoaded]);

    useEffect(() => {
        setOdometerValue(props.value);
    }, [odometerValue]);

    return (
        <Fragment>
            <div className={classes.root}>
                <Odometer
                    value={odometerValue}
                    format="(,ddd)"
                    duration={props.duration ? props.duration : 5000}
                    theme={props.theme}
                />
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        //backgroundColor: "yellow",
    },
}));

export default OdometerComponent;
