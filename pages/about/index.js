import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import PublicLayout from '../../components/Layout/PublicLayout';
import AboutComponent from '../../components/About/AboutComponent';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>About OMC | Out My Closet</title>
            </Head>

            <PublicLayout>
                <AboutComponent/>
            </PublicLayout>
        </Fragment>
    );
}
