import {Fragment, useState, useEffect} from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import classNames from "classnames";
import { useSnackbar } from 'notistack';


import AdminLayout from '../../components/Layout/AdminLayout';
import AdminContent from '../../components/Layout/AdminContent';
import PageHeader from '../../components/Presentation/PageHeader';
import Header from '../../components/Presentation/Header';
import Panel from '../../components/Presentation/Panel';
import DonationsForm from '../../components/Donations/DonationsForm';

import homeService from '../../services/homeService';

const Admin = (props) => {

    const {classes} = useStyles(props);

    return (
        <Fragment>
            <Head>
                <title>Admin | Out My Closet</title>
            </Head>

            <AdminLayout>
                <AdminContent>
                    <PageHeader title="Dashboard"/>

                    <Grid container>
                        <Grid item xs="12">
                            <Panel margin>
                                <Header
                                    title="Donations"
                                    size="small"
                                />
                                <DonationsForm donations={props.donations}/>
                            </Panel>
                        </Grid>
                        <Grid item xs="12">
                            <Panel margin>
                                <Header
                                    title="Carousel"
                                    size="small"
                                />
                            </Panel>
                        </Grid>
                    </Grid>
                </AdminContent>
            </AdminLayout>
        </Fragment>
    );

};

const useStyles = makeStyles()((theme) => ({
    root: {

    },
}));

Admin.getInitialProps = async () => {

    const donations = await homeService.getDonations.then(function(res){
        return res;
    },
    function(error){
        enqueueSnackbar('Sorry an error occured getting donations', { autoHideDuration: 3000, variant: "error" });
    });
    // add error response


    return { donations: donations.number }
}

export default Admin;
