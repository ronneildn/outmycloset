import {useState} from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';

import PublicHeader from '../Navigation/PublicHeader';

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
            <header className={classes.root}>
                <PublicHeader
                    scrollOffset={offset}
                />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        // backgroundColor: theme.palette.secondary.background,
        // color: theme.palette.secondary.foreground,
        overflow: 'auto'
    },
}));

export default PublicLayout;
