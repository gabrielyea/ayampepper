/* eslint-disable no-unused-vars */
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useWindowDimensions from '../custom-hooks/useWindowDimenssions';
import styles from './scrollCards.module.scss';

const animCollection = {
  enterRigth: {
    hide: {
      x: '-100px',
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      x: '0',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
  },
  enterLeft: {
    hide: {
      x: '55vw',
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      x: '50vw',
      transition: {
        duration: 1,
      },
    },
  },
  fadeIn: {
    hide: {
      scale: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    show: {
      scale: [0, 1],
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
  },
};

const ScrollCards = ({ animName, children }) => {
  const [ref, inView] = useInView({ threshold: 0.50 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hide');
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        className={styles.mainContainer}
        ref={ref}
        variants={animCollection[animName]}
        animate={controls}
      >

        {children}
      </motion.div>
    </>
  );
};

export default ScrollCards;
