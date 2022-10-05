import Grid from '@mui/material/Grid';
import Head from 'next/head';
import { render } from 'react-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';

import Themes from '../constants/theme.js';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

import '../styles/reset.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
    return (
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={Themes.defaultTheme}>
                <Grid container direction={"column"} className="appContainer">
                    <Head>
                        <link rel="icon" href="/favicon.ico" />
                        <meta
                            name="viewport"
                            content="minimum-scale=1, initial-scale=1, width=device-width"
                        />
                    </Head>

                    <Component {...pageProps} />
                </Grid>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MyApp
