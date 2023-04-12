import styles from '../scss/pages/index.module.scss';

const Error = () => {
  return (
    <section className={`${styles.Error} section`}>
      <h2>404</h2>
      <p>Page Not Found</p>
    </section>
  );
};

export default Error;
