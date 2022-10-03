import { Fragment} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const LoginPage = () => {

    return (
        <Fragment>
            <Head>
                <title>Login | OpenSponsorship</title>
            </Head>

            <h1>Login</h1>
            <form action="/api/login" method="post">
                <label>Email</label>
                <input type="email" name="email" placeholder="Type email address" />
                <label>Password</label>
                <input type="password" name="password" placeholder="Type password" />
                <input type="submit" value="login"/>
            </form>
        </Fragment>
    );
};

export default LoginPage;
