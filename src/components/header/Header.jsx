import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import { useUserAuth } from "../../context/UserAuthContext";

import { GET } from "../../utils/https";
import styles from "./index.module.scss";

const Header = ({}) => {
  const { state, dispatch } = useContext(Context);
  const [movieList, setMovieList] = useState([]);
  const [burger, setBurger] = useState(false);

  const { user, logout } = useUserAuth();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => window.innerWidth > 768 && setBurger(false);

  const handleBurger = () => {
    setBurger((prev) => !prev);
    setUserSelected(false);
  };

  const handleLogout = async () => {
    try {
      // #1 logout function setted in the UserAuthContext.jsx file
      await logout();
      // #2 Set the user logout state in the localStorage
      window.localStorage.setItem("isLogged", JSON.stringify(false));
      // #3 Once the user has logged out the data must be cleaned
      window.localStorage.setItem("currentUser", JSON.stringify(null));
      dispatch({ type: "SET_CURRENT_USER_DATA", payload: null });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.Header}>
      <div className={styles.navBar}>
        <div className={styles.wrapper}>
          <Link to="/">
            <h5 className={styles.movieTitle}>gocine</h5>
          </Link>

          <ul className={styles.navList}>
            <Link className={styles.link} to="/">
              home
            </Link>

            <Link className={styles.link} to="/developers">
              about
            </Link>

            {!user && (
              <Link className={styles.link} to="/login">
                Login
              </Link>
            )}

            {user && (
              <Link className={styles.link} to="/tickets">
                Tickets
              </Link>
            )}

            {user && (
              <Link className={styles.link} to="/login" onClick={handleLogout}>
                logout
              </Link>
            )}
          </ul>
        </div>
        <div className={styles.wrapperEnd}>
          {state.currentUserData && (
            <span className={styles.yearProd}>
              Welcome {state.currentUserData?.username}
            </span>
          )}

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
