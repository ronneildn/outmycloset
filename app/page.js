"use client";
import { Fragment } from "react";
import Head from "next/head";
import styles from "./page.module.css";

import PublicLayout from "../components/Layout/PublicLayout";
import HomeComponent from "../components/Home/HomeComponent";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Out My Closet</title>
                <meta
                    name="Out My Closet"
                    content="Generated by create next app"
                />
                <link rel="icon" href="../public/favicon.ico" />
            </Head>

            <PublicLayout>
                <HomeComponent />
            </PublicLayout>
        </Fragment>
    );
}
