import {Fragment} from 'react';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";

import AdminLayout from '../../components/Layout/AdminLayout';

const admin = (props) => {

    const {classes} = useStyles(props);

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
};

const useStyles = makeStyles()((theme) => ({
    root: {

    },
}));

export default admin;
