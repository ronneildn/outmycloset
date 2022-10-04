import { Fragment} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const SignupPage = () => {

    return (
        <Fragment>
            <Head>
                <title>Signup | OpenSponsorship</title>
            </Head>

            <h1>Signup</h1>
            <form action="/api/signup" method="post">
                <label>Email</label>
                <input type="email" name="email" placeholder="Type email address" />
                <label>Password</label>
                <input type="password" name="password" placeholder="Type password" />
                <input type="submit" value="signup"/>
            </form>
        </Fragment>
    );
};

export default SignupPage;
