import Grid from '@mui/material/Grid';
import Head from 'next/head';
import { render } from 'react-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { makeStyles } from 'tss-react/mui';
import { ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from "next-auth/react"
import ImageModal from '../components/Presentation/ImageModal';
import { SnackbarProvider, useSnackbar, closeSnackbar } from 'notistack';

import Themes from '../constants/theme.js';
import ImageModalService from '../services/imageModalService';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/animation.css';
import '../styles/odometer.css';


function MyApp({ Component, pageProps: {session, ...pageProps} }) {

    const imageModal = ImageModalService();

    return (
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={Themes.defaultTheme}>
                <SessionProvider session={session}>
                    <Grid container direction={"column"} className="appContainer">
                        <Head>
                            <link rel="icon" href="/favicon.ico" />

                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                            <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@400;700&family=Open+Sans:wght@300;400;700;800&display=swap" rel="stylesheet" />

                            <meta
                                name="viewport"
                                content="minimum-scale=1, initial-scale=1, width=device-width"
                            />
                        </Head>

                        <SnackbarProvider
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            maxSnack={3}
                        >
                            <Component imageModal={imageModal} {...pageProps}/>
                        </SnackbarProvider>

                        <ImageModal
                            imageModal={imageModal}
                        />

                    </Grid>
                </SessionProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: 'red'
    },

}));

export default MyApp
