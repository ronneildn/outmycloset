import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";

import PublicLayout from "@/components/Layout/PublicLayout";
import UpdateDetailsComponent from "@/components/News/UpdateDetailsComponent";

export default function Home({ params }) {
    return (
        <Fragment>
            <Head>
                <title>News & Media | Out My Closet</title>
            </Head>

            <PublicLayout>
                <UpdateDetailsComponent slug={params.slug} />
            </PublicLayout>
        </Fragment>
    );
}
