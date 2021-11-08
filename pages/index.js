import { motion } from 'framer-motion';
import Head from 'next/head';
import useWindowDimensions from '../components/custom-hooks/useWindowDimenssions';
import ScrollCards from '../components/scroll-cards/ScrollCards';
import Wrapper from '../components/wrapper/Wrapper';
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
  const { x } = useWindowDimensions();
  return (
    <div className={styles.container}>
      <Head>
        <title>Ayampepper</title>
        <meta name="description" content="Ayamppeper product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}
        >
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
        </div>

        <Wrapper>
          <h2>El chili</h2>
          {x > 0
          && (
          <>
            <ScrollCards animName={(x < 600) ? 'fadeIn' : 'enterRigth'}>
              <div>
                <p>
                  {' '}
                  Irure ut dolor ea amet laborum mollit ad aute elit exercitation ad.
                  Velit aute enim minim ipsum proident laboris
                  ullamco ullamco dolor exercitation Lorem laboris dolor.
                  Amet nostrud est mollit deserunt deserunt sit non.
                  {' '}
                </p>
              </div>
              <img src="./images/red-chile.png" alt="chile" />
            </ScrollCards>
            <ScrollCards animName={x < 600 ? 'fadeIn' : 'enterLeft'}>
              <img src="./images/red-chile.png" alt="chile" />
              <div>
                <p>
                  {' '}
                  Irure ut dolor ea amet laborum mollit ad aute elit exercitation ad.
                  Velit aute enim minim ipsum proident laboris
                  ullamco ullamco dolor exercitation Lorem laboris dolor.
                  Amet nostrud est mollit deserunt deserunt sit non.
                  {' '}
                </p>
              </div>

            </ScrollCards>
            <ScrollCards animName={x < 600 ? 'fadeIn' : 'enterRigth'}>
              <div>
                <p>
                  {' '}
                  Irure ut dolor ea amet laborum mollit ad aute elit exercitation ad.
                  Velit aute enim minim ipsum proident laboris
                  ullamco ullamco dolor exercitation Lorem laboris dolor.
                  Amet nostrud est mollit deserunt deserunt sit non.
                  {' '}
                </p>
              </div>
              <img src="./images/red-chile.png" alt="chile" />
            </ScrollCards>

          </>
          )}
        </Wrapper>
        )

        <Wrapper>
          <h2>¿Sabias que?</h2>
          {x > 0
          && (
          <>
            <ScrollCards animName={x < 600 ? 'fadeIn' : 'enterRigth'}>
              <div>
                <p>
                  {' '}
                  Irure ut dolor ea amet laborum mollit ad aute elit exercitation ad.
                  Velit aute enim minim ipsum proident laboris
                  ullamco ullamco dolor exercitation Lorem laboris dolor.
                  Amet nostrud est mollit deserunt deserunt sit non.
                  {' '}
                </p>
              </div>
              <img src="./images/red-chile.png" alt="chile" />
            </ScrollCards>
            <ScrollCards animName={x < 600 ? 'fadeIn' : 'enterLeft'}>
              <img src="./images/red-chile.png" alt="chile" />
              <div>
                <p>
                  {' '}
                  Irure ut dolor ea amet laborum mollit ad aute elit exercitation ad.
                  Velit aute enim minim ipsum proident laboris
                  ullamco ullamco dolor exercitation Lorem laboris dolor.
                  Amet nostrud est mollit deserunt deserunt sit non.
                  {' '}
                </p>
              </div>

            </ScrollCards>
            <ScrollCards animName={x < 600 ? 'fadeIn' : 'enterRigth'}>
              <motion.ul
                variants={parent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.li style={{ color: 'white' }} variants={childA}>
                  dato curioso
                </motion.li>
                <motion.li style={{ color: 'white' }} variants={childA}>
                  dato curioso
                </motion.li>
                <motion.li style={{ color: 'white' }} variants={childA}>
                  dato curioso
                </motion.li>
                <motion.li style={{ color: 'white' }} variants={childA}>
                  dato curioso
                </motion.li>
              </motion.ul>
              <img src="./images/red-chile.png" alt="chile" />
            </ScrollCards>
          </>
          )}
        </Wrapper>
      </main>
    </div>
  );
}
