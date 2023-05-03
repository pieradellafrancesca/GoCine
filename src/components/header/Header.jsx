import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import { useUserAuth } from "../../context/UserAuthContext";

import styles from "./index.module.scss";

const Header = ({}) => {
  const { state, dispatch } = useContext(Context);
  const [userSelected, setUserSelected] = useState(false);
  const [burger, setBurger] = useState(false);
  const { user } = useUserAuth();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => window.innerWidth > 768 && setBurger(false);

  const handleBurger = () => {
    setBurger((prev) => !prev);
    setUserSelected(false);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.navBar}>
        <div className={styles.wrapper}>
          <h4 className={styles.movieTitle}>Movie Title</h4>
          <ul className={styles.navList}>
            <Link className={styles.link} to="/">
              about
            </Link>

            <Link className={styles.link} to="/search">
              actors
            </Link>
            <Link className={styles.link} to="/search">
              review
            </Link>
            <Link className={styles.link} to="/search">
              login
            </Link>

            {/* {!user && (
              <Link className={styles.link} to="/login">
                Login
              </Link>
            )}

            {user && (
              <Link className={styles.link} to="/tickets">
                Tickets
              </Link>
            )} */}
          </ul>
        </div>
        <div className={styles.wrapperEnd}>
          <span className={styles.yearProd}>2011</span>
          <div className={styles.burger}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
