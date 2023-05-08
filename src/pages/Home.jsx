import { useContext, useEffect, useState } from "react";
import { Context } from "../context";

import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../../firebaseConfig";
import { onValue, ref } from "firebase/database";

import Hero from "../components/hero";
import MainContent from "../components/mainContent";
import Reviews from "../components/reviews";

import styles from "../scss/pages/home.module.scss";

const Home = () => {
  // #1 A context was setted to store the data that is in the real time database of the current logged user.
  const { state, dispatch } = useContext(Context);
  // #2 Gettin the data from the authentication (uid) so later we can filter it with the data coming from the real time database.
  const { user } = useUserAuth();

  useEffect(() => {
    // #3 reffering our real time database.
    const usersRef = ref(db, "users");
    // #4 getting the data of the 'users' key.
    onValue(usersRef, (snapShot) => {
      // #5 Firebase fetch.
      const data = snapShot.val();
      // #6 filtering data from real time db with the current user uid
      for (const id in data) {
        if (id === user?.uid) {
          dispatch({
            type: "SET_CURRENT_USER_DATA",
            payload: { id, ...data[id] },
          });
          // #7 save data in local storage so when page is refreshed it does not vanish
          window.localStorage.setItem(
            "currentUser",
            JSON.stringify({ id, ...data[id] })
          );
        }
      }
    });
  }, [state.movieID]);

  return (
    <section className={styles.Home}>
      <Hero />
      <MainContent />
      <Reviews />
    </section>
  );
};

export default Home;
