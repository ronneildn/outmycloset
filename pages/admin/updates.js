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
import UpdateList from '../../components/News/UpdateList';

import homeService from '../../services/homeService';

const AdminUpdates = (props) => {

    const {classes} = useStyles(props);

    return (
        <Fragment>
            <Head>
                <title>Admin Updates | Out My Closet</title>
            </Head>

            <AdminLayout>
                <AdminContent>

                    <Grid container>
                        <Grid item xs="12">
                            <Panel margin>
                                <Header
                                    title="Updates"
                                    size="small"
                                />
                                <div className={classes.updateListContainer}>
                                    <UpdateList/>
                                </div>
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

// AdminUpdates.getInitialProps = async () => {
//
//     const updates = await updatesService.getUpdates
//     .then(function(res){
//         return res;
//     },
//     function(error){
//         enqueueSnackbar('Sorry an error occured getting updates', { autoHideDuration: 3000, variant: "error" });
//     });
//
//     return { updates: updates }
// }

export default AdminUpdates;
