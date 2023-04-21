import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import { useUserAuth } from "../../context/UserAuthContext";
import UserMiniModal from "../userMiniModal";

import styles from "./index.module.scss";

const Header = ({}) => {
  const [userSelected, setUserSelected] = useState(false);
  const [burger, setBurger] = useState(false);

  // ===== // ===== //
  // Display header user data - Filippo

  const { state, dispatch } = useContext(Context);
  const { user } = useUserAuth();

  // Both context and user (last one coming from UserAuthContext.jsx),
  // were implemented to check if there is user data
  // then we'll display their data else the logged out layout is displayed

  const handleBurger = () => {
    setBurger((prev) => !prev);
    setUserSelected(false);
    console.log(burger);
  };

  // ===== // ===== //

  const onHandleUserCLick = () => {
    setUserSelected((prev) => !prev);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.userInfo}>
        {state.currentUserData != null && <p className="upperName">Welcome</p>}

        <h4
          onClick={onHandleUserCLick}
          className={`${styles.username} ${
            userSelected && styles.userSelected
          }`}
        >
          {state.currentUserData != null && (
            <>
              <span>
                {state.currentUserData.username}
                {userSelected ? "▴" : "▾"}
              </span>
              <UserMiniModal userSelected={userSelected} />
            </>
          )}
        </h4>
        {!user && (
          <div className={styles.logo}>

            <img src="/logo.svg_3.svg" alt="logo" />



          </div>
        )}
      </div>

      {user && (
        <div className={styles.logo}>
<Link to="/">
            <img src="/logo.svg_3.svg" alt="logo" />
          </Link>
        </div>
      )}

      <ul className={styles.navHeader}>
        <Link className={styles.navLink} to="/">
          Home
        </Link>
        <Link className={styles.navLink} to="/search">
          Search
        </Link>

        {!user && (
          <Link className={styles.navLink} to="/login">
            Login
          </Link>
        )}

        {user && (
          <Link className={styles.navLink} to="/tickets">
            Tickets
          </Link>
        )}
      </ul>

      <div onClick={handleBurger} className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <ul
        className={
          burger
            ? ` ${styles.mobileNav} ${styles.showNav}`
            : `${styles.mobileNav}`
        }
      >
        <Link onClick={handleBurger} className={styles.navLink} to="/">
          Home
        </Link>
        <Link onClick={handleBurger} className={styles.navLink} to="/search">
          Search
        </Link>

        {!user && (
          <Link onClick={handleBurger} className={styles.navLink} to="/login">
            Login
          </Link>
        )}

        {user && (
          <Link onClick={handleBurger} className={styles.navLink} to="/tickets">
            Tickets
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Header;
