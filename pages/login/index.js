import { Fragment, useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        const res =  await fetch('/api/login', {
            method: "post",
            body: JSON.stringify({email, password})
        }).then((success) => success.json())

        const token = res.token;

    }
    return (
        <Fragment>
            <Head>
                <title>Login | OpenSponsorship</title>
            </Head>

            <h1>Login</h1>
            <form >
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value="email"
                    placeholder="Type email address"
                    onChange={e => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value="password"
                    placeholder="Type password"
                    onChange={e => setPassword(e.target.value)}
                />

                <input type="button" value="login" onClick={handleLogin}/>
            </form>
        </Fragment>
    );
};

export default LoginPage;
