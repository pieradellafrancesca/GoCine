import styles from "../scss/pages/tickets.module.scss";

const Tickets = () => {
  return (
    <div className={styles.Tickets}>
      <div className={styles.cardWrap}>
        <div className={`${styles.cardLeft} ${styles.card}`}>
          {/* card */}
          <h1>
            MovieGo <span>Cinema</span>
          </h1>
          <div className={styles.title}>
            <h2>{tickets.title}</h2>
            <span>movie</span>
          </div>
          <div className={styles.name}>
            <h2>Pippo</h2>
            <span>name</span>
          </div>
          <div className={styles.seat}>
            <h2>{tickets.seat}</h2>
            <span>seat</span>
          </div>
          <div className={styles.time}>
            <h2>{tickets.time}</h2>
            <span>time</span>
          </div>
        </div>
        <div className={`${styles.cardRight} ${styles.card}`}>
          {/* card */}
          <div className={styles.eye}></div>
          <div className={styles.number}>
            <h3>{tickets.seat}</h3>
            <span>seat</span>
          </div>
          <div className={styles.barcode}></div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

// useEffect(() => {
//     // #3 reffering our real time database.
//     const usersRef = ref(db, "users");
//     // #4 getting the data of the 'users' key.
//     onValue(usersRef, (snapShot) => {
//       // #5 Firebase fetch.
//       const data = snapShot.val();
//       // #6 filtering data from real time db with the current user uid
//       for (const id in data) {
//         if (id === user?.uid) {
//           dispatch({
//             type: "SET_CURRENT_USER_DATA",
//             payload: { id, ...data[id] },
//           });
//           // #7 save data in local storage so when page is refreshed it does not vanish
//           window.localStorage.setItem(
//             "currentUser",
//             JSON.stringify({ id, ...data[id] })
//           );
//         }
//       }
//     });
//   }, []);
const tickets = {
  id: 121,
  room: 2,
  seat: "4-b",
  time: "18:00",
  title: "movie title",
};
