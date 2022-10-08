import {Fragment, useState, useEffect} from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import dynamic from 'next/dynamic';

const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
});

const OdometerComponent = (props) => {

    const {classes} = useStyles(props);
    const [odometerValue, setOdometerValue] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setOdometerValue(props.value);
        }, props.time? props.time: 1000);
    }, []);

    return (
        <Fragment>
            <div className={classes.root}>
                <Odometer
                    value={odometerValue}
                    format="(,ddd)"
                    duration={props.duration? ropos.duration: 5000}
                    theme={props.theme}
                />
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {

    },
}));



export default OdometerComponent;
