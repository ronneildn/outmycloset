import {Fragment} from 'react';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import { useSession } from "next-auth/react"

import AdminLayout from '../../components/Layout/AdminLayout';

const admin = (props) => {

    const {classes} = useStyles(props);
    const { data: session, status } = useSession();

    console.log(status)
    //if (status === "authenticated") {

        return (
            <Fragment>
                <Head>
                    <title>Admin | Out My Closet</title>
                </Head>

                <AdminLayout>
                    <h1>Admin</h1>
                </AdminLayout>
            </Fragment>
        );
    // }
    // else {
    //     return <a>Login</a>
    // }

};

const useStyles = makeStyles()((theme) => ({
    root: {

    },
}));

export default admin;
