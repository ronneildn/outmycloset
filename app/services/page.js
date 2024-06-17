import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import PublicLayout from '../../components/Layout/PublicLayout';
import ServicesComponent from '../../components/Services/ServicesComponent';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Services | Out My Closet</title>
            </Head>

            <PublicLayout>
                <ServicesComponent />
            </PublicLayout>
        </Fragment>
    );
}
