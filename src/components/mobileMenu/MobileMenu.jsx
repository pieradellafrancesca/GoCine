import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import styles from "./index.module.scss";

const MobileMenu = ({ setActive }) => {
  const { state, dispatch } = useContext(Context);
  const { user, logout } = useUserAuth();

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

  const handleClick = () => setActive(false);

  return (
    <div onClick={handleClick} className={styles.MobileMenu}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.logo}>
            <span className={styles.flip}>Go</span>
            <span className={styles.text}>Cine</span>
          </h1>
        </div>

        <ul className={styles.navList}>
          <Link onClick={handleClick} className={styles.link} to="/">
            home
          </Link>

          <Link onClick={handleClick} className={styles.link} to="/developers">
            about
          </Link>

          {!user && (
            <Link onClick={handleClick} className={styles.link} to="/login">
              Login
            </Link>
          )}

          {user && (
            <Link onClick={handleClick} className={styles.link} to="/tickets">
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
    </div>
  );
};

export default MobileMenu;
