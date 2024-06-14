import {Fragment, useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { useSnackbar } from 'notistack';

import ButtonPanel from '../../components/Presentation/ButtonPanel';

import homeService from '../../services/homeService';

const DonationsForm = (props) => {

    const {classes} = useStyles(props);
    const { enqueueSnackbar } = useSnackbar();
    const [donations, setDonations] = useState(props.donations);
    const [processingDonations, setProcessingDonations] = useState(false);

    useEffect(() => {
        if (processingDonations) {
            saveDonations();
        }
    },[processingDonations])

    const saveDonationsHandler =  () => {
        setProcessingDonations(true);
    }

    const saveDonations = async () => {
        await homeService.updateDonations(donations)
        .then(function(res){
            enqueueSnackbar('Donations updated', { autoHideDuration: 3000, variant: "success" });
        },
        function(error){
            enqueueSnackbar('Sorry an error occured saving donations', { autoHideDuration: 3000, variant: "error" });
        })
        .finally(() => {
            setProcessingDonations(false);
        });
    }

    return (
        <Fragment>

            <Grid container spacing="2">
                <Grid item xs={12}>
                    <TextField
                        id="Donations"
                        label="Number of Donations"
                        type="number"
                        variant="outlined"
                        //placeholder="Number of Donations"
                        size="small"
                        value={donations}
                        onChange={e => setDonations(e.target.value)}
                        // fullWidth
                        // required
                        // error={authError || usernameError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ButtonPanel>
                        <Button variant="contained" onClick={saveDonationsHandler}>Save</Button>
                    </ButtonPanel>
                </Grid>
            </Grid>

        </Fragment>
    );

};

const useStyles = makeStyles()((theme) => ({
    root: {

    },
}));


export default DonationsForm;
