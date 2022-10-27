import {useState} from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';

import PublicHeader from '../Navigation/PublicHeader';
import PublicFooter from '../Navigation/PublicFooter';

const PublicLayout = (props) => {

    const {classes} = useStyles();
    const [offset, setOffset] = useState(0);

    //Scrolling
    const onMainScroll = (event) => {
        if (props.onMainScroll) props.onMainScroll(event);
        handleScroll(event)
    };

    const handleScroll = (event) => {
        const currentScrollY = event.target.scrollTop;
        const _offset = currentScrollY;

        setOffset(_offset);
    };



    return (
        <div className={classes.root} onScroll={onMainScroll}>
            <header className={classes.header}>
                <PublicHeader
                    scrollOffset={offset}
                />
            </header>
            <main className={classes.main}>
                {props.children}
            </main>
            <footer>
                <PublicFooter />
            </footer>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        // backgroundColor: theme.palette.secondary.background,
        // color: theme.palette.secondary.foreground,
        overflow: 'auto',
        display: "flex",
        flexDirection: "column",
        minHeight: "100%"
    },
    main: {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%"
    }
}));

export default PublicLayout;
