import Link from 'next/link';
import { Fragment } from 'react';

import styles from '../../styles/Home.module.css';

const HomeComponent = () => {
    return (
        <Fragment>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Out My Closet
                </h1>

                <section style={{margin: "20px"}}>
                    <ul>
                        <li>
                            <Link href='/login'>Login</Link>
                        </li>
                    </ul>
                </section>
            </main>
        </Fragment>
    );
};

export default HomeComponent;
