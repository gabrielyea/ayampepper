import styles from './wrapper.module.scss';

const Wrapper = ({ children }) => (
  <div
    className={styles.mainContainer}
  >
    {children}
  </div>
);

export default Wrapper;
