import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={`${styles.Navbar} flex justify-content-center`}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>

      <Link to="/" className={styles.navLink}>
        Search
      </Link>

      <Link to="/auth" className={styles.navLink}>
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
