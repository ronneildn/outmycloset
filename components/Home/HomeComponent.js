import Link from 'next/link';
import { Fragment } from 'react';

const HomeComponent = () => {
    return (
        <Fragment>
            <main>
                <h1>
                    Out My Closet
                </h1>

                <section style={{margin: "20px"}}>
                    <ul>
                        <li>
                            <Link href='/login'>Login</Link>
                        </li>
                        <li>
                            <Link href='/signup'>Signup</Link>
                        </li>
                    </ul>
                </section>
            </main>
        </Fragment>
    );
};

export default HomeComponent;
