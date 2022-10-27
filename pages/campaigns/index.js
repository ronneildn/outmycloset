import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import PublicLayout from '../../components/Layout/PublicLayout';
import CampaignsComponent from '../../components/Campaigns/CampaignsComponent';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Camapaigns | Out My Closet</title>
            </Head>

            <PublicLayout>
                <CampaignsComponent />
            </PublicLayout>
        </Fragment>
    );
}
