import { motion } from 'framer-motion';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const parent = {
  initial: {

  },
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  exit: {

  },
};

const childA = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
const childB = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const title = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ayampepper</title>
        <meta name="description" content="Ayamppeper product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div variants={parent} initial="initial" animate="animate" exit="exit" style={{ display: 'flex' }}>
          <motion.div variants={childA} style={{ margin: 0 }}>
            <motion.p className={styles.ayam}>Ayam</motion.p>
          </motion.div>
          <motion.div variants={childB} style={{ margin: 0 }}>
            <motion.p className={styles.pepper}>pepper</motion.p>
          </motion.div>
        </motion.div>
        <motion.h1 variants={title} initial="initial" animate="animate" className={styles.title}>
          Como hecho en casa
        </motion.h1>
      </main>
    </div>
  );
}
