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
      x: '200px',
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      x: '0',
      transition: {
        duration: 1,
      },
    },
  },
  fadeIn: {
    hide: {
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    show: {
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
  },
};

const ScrollCards = ({ animName, children, span }) => {
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
        style={span}
      >

        {children}
      </motion.div>
    </>
  );
};

export default ScrollCards;
