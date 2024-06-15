import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";

import PublicLayout from "../../components/Layout/PublicLayout";
import NewsComponent from "../../components/News/NewsComponent";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>News & Media | Out My Closet</title>
            </Head>

            <PublicLayout>
                <NewsComponent />
            </PublicLayout>
        </Fragment>
    );
}
