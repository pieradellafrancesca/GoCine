import { Link } from "react-router-dom";

import { RxDoubleArrowLeft } from "react-icons/rx";
import styles from "../scss/pages/error.module.scss";

const Error = () => {
  return (
    <section className={`${styles.Error} section`}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.logo}>
            <span className={styles.flip}>Go</span>
            <span className={styles.text}>Cine</span>
          </h1>
        </div>
        <div className={styles.errorMsg}>
          <h3>404</h3>
          <h5>Sorry, the page you are looking for does not exist</h5>
        </div>

        <Link to="/">
          <RxDoubleArrowLeft />
          Back
        </Link>
      </div>
    </section>
  );
};

export default Error;
