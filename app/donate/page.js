"use client";
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

import PublicLayout from "../../components/Layout/PublicLayout";

export default function DonatePage() {
    return (
        <Fragment>
            <Head>
                <title>Services | Out My Closet</title>
            </Head>

            <PublicLayout></PublicLayout>
        </Fragment>
    );
}
