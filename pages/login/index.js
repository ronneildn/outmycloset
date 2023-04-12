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

const LoginPage = (props) => {

    const {classes} = useStyles(props);
    const router = useRouter();
    const { data: session } = useSession();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const handleLogin = async() => {
        console.log(`${username} - ${password}`);
        setMessage("");
        enqueueSnackbar('I love snacks.', { autoHideDuration: 3000, variant: "success" });

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
                console.log("session");
                router.push("/admin");
            }
            else{
                switch (res.status) {
                    case 401:
                    setMessage(`Sorry, username or password are inncorrect`)
                }
            }
        } catch (error) {
            //window.alert(error)
        }

        //console.log()
        //const json = jwt.decode(res);
        //     setMessage(`Welcome ${json.email}`)
        //console.log(res);

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

                        <div>
                            {message}
                        </div>

                        {
                            session?
                            <div>

                                <Button variant="contained"  fullWidth onClick={handleLogout}>Log out</Button>
                            </div>
                            :
                            <form>
                                <div className={classes.gridContainer}>
                                    <Grid container spacing={3} alignItems="center" className={classes.grid}>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="Email"
                                                label="Email"
                                                variant="outlined"
                                                placeholder="Type email address"
                                                size="small"
                                                onChange={e => setUsername(e.target.value)}
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
                                <Button variant="contained"  fullWidth onClick={handleLogin}>Log in</Button>
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
