import { Fragment, useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import jwt from 'jsonwebtoken';
import { makeStyles } from 'tss-react/mui';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSnackbar } from 'notistack';

import PublicLayout from '../../components/Layout/PublicLayout';
import Ribbon from '../../components/Presentation/Ribbon';

const LoginPage = (props) => {

    const {classes} = useStyles(props);
    const router = useRouter();
    const { data: session } = useSession();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [message, setMessage] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const setUsernameHandler = (value) => {
        setUsernameError(false);
        setUsername(value);
    }

    const setPasswordHandler = (value) => {
        setPasswordError(false);
        setPassword(value);
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        setMessage("");

        if(validator()){
            try {
                const res =  await signIn("credentials", {
                    username: username,
                    password: password,
                    redirect: false,
                }).then((res) => {
                    console.log(res)
                    return res;
                });

                console.log(res);
                if (res.ok) {
                    enqueueSnackbar('Welcome', { autoHideDuration: 3000, variant: "success" });
                    router.push("/admin");
                }
                else{
                    if (res.status === 401) setMessage('Username or Password incorrect');
                    else setMessage('Sorry an error occured');

                    console.log(message)
                    enqueueSnackbar(message, { autoHideDuration: 3000, variant: "error" });
                }
            } catch (error) {
                enqueueSnackbar('Sorry an error occured', { autoHideDuration: 3000, variant: "error" });
            }
        }
    }

    const validator = () => {

        if(!username || !password) {
            if(!username)setUsernameError(true);
            if(!password)setPasswordError(true);
            setMessage('Enter credentials');

            return false;
        }

        return true;
    }

    const handleLogout = async() => {
        signOut();
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

                        {message &&
                            <Ribbon status={"error"}>
                                {message}
                            </Ribbon>
                        }

                        {
                            session?
                            <div>

                                <Button variant="contained"  fullWidth onClick={handleLogout}>Log out</Button>
                            </div>
                            :
                            <form onSubmit={handleLogin}>
                                <div className={classes.gridContainer}>
                                    <Grid container spacing={3} alignItems="center" className={classes.grid}>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="Email"
                                                label="Email"
                                                type="text"
                                                variant="outlined"
                                                placeholder="Type email address"
                                                size="small"
                                                onChange={e => setUsernameHandler(e.target.value)}
                                                fullWidth
                                                required
                                                //error={error.authError || error.emailError}
                                                error={authError || usernameError}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="Password"
                                                label="Password"
                                                type="password"
                                                name="password"
                                                placeholder="Type password"
                                                onChange={e => setPasswordHandler(e.target.value)}
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                required
                                                error={authError || passwordError}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <Button variant="contained" type="submit" fullWidth onSubmit={handleLogin}>Log in</Button>
                            </form>
                        }

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
