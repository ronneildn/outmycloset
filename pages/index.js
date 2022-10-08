import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import PublicLayout from '../components/Layout/PublicLayout';
import HomeComponent from '../components/Home/HomeComponent';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Out My Closet</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PublicLayout>
                <HomeComponent
                    
                />
            </PublicLayout>
        </Fragment>
    );
}
