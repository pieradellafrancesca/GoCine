import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import { useUserAuth } from "../../context/UserAuthContext";

import { GET } from "../../utils/https";
import styles from "./index.module.scss";

const Header = ({}) => {
  const { state, dispatch } = useContext(Context);
  const [movieList, setMovieList] = useState([]);
  const [title, setTitle] = useState("");
  const [userSelected, setUserSelected] = useState(false);
  const [burger, setBurger] = useState(false);
  const [active, setActive] = useState("");

  const { user, logout } = useUserAuth();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    GET("popular")
      .then(({ results }) => {
        setMovieList(results);
        dispatch({ type: "SET_NOW_PLAYING", payload: results });
      })
      .then(() => {
        if (state.movieID) {
          GET(state.movieID).then(({ title }) => setTitle(title));
        }
      });
  }, [state.movieID]);

  useEffect(() => {
    setActive(movieList[0]?.id);
  }, [movieList[0]?.id]);

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

  const handleClick = (movieID) => {
    setActive(movieID);
    dispatch({ type: "SET_MOVIE_ID", payload: movieID });
  };

  return (
    <div className={styles.Header}>
      <div className={styles.navBar}>
        <div className={styles.wrapper}>
          <h4 className={styles.movieTitle}>
            {title ? title : movieList[0]?.title}
          </h4>
          <ul className={styles.navList}>
            <Link className={styles.link} to="/">
              home
            </Link>

            <Link className={styles.link} to="/about">
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
          {user && (
            <span className={styles.yearProd}>
              Welcome {state.currentUserData.username}
            </span>
          )}

          <div className={styles.burger}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </div>
      <ul className={styles.filterList}>
        {movieList.map((item, i) => {
          return (
            <button
              className={active === item.id ? styles.active : null}
              onClick={() => handleClick(item.id)}
              key={i}
              title={item.title}
            >
              {item.title.split(" ").length > 3
                ? `${item.title.split(" ").splice(0, 2).join(" ")} ...`
                : item.title}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
