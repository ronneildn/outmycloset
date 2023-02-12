import { Fragment, useState} from 'react';
import { makeStyles } from 'tss-react/mui';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Head from 'next/head';

import PublicLayout from '../../components/Layout/PublicLayout';

const LoginPage = (props) => {

    const {classes} = useStyles(props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        console.log(`${email} - ${password}`)
        const res =  await fetch('/api/login', {
            method: "post",
            body: JSON.stringify({email, password})
            //body: JSON.stringify({email: "email", password: "password"})
        }).then((success) => success.json())

        const token = res.token;

    }

    return (
        <Fragment>
            <Head>
                <title>Login | OpenSponsorship</title>
            </Head>

            <PublicLayout>
                <div className={classes.root}>
                    <div className={classes.formContainer}>
                        <h1>Login</h1>

                        <form >
                            <div className={classes.gridContainer}>
                                <Grid container spacing={3} alignItems="center" className={classes.grid}>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="Email"
                                            label="Email"
                                            variant="outlined"
                                            placeholder="Type email address"
                                            size="small"
                                            onChange={e => setEmail(e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="Password"
                                            label="Password"
                                            type="password"
                                            name="password"
                                            placeholder="Type password"
                                            onChange={e => setPassword(e.target.value)}
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <Button variant="contained"  fullWidth onClick={handleLogin}>Login</Button>
                        </form>
                    </div>
                </div>
            </PublicLayout>
        </Fragment>
    );
};

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
        alignItems: "center",
        justifyContent: "center"
    },
    formContainer: {
        backgroundColor: theme.palette.primary.background,
        padding: "30px 30px 40px",
        borderRadius: 10,
        textAlign: "center"
    },
    gridContainer: {
        margin: "20px 0"
    }
}));

export default LoginPage;
