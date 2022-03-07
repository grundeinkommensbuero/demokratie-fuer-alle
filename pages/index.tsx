import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demokratie für alle</title>
        <meta
          name='description'
          content='Links und Informationen zur Initiative "Demokratie für alle"'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h2>Demokratie für alle</h2>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Home;
