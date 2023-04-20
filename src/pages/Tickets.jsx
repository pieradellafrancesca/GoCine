import styles from "../scss/pages/tickets.module.scss";
import TicketToPrint from "../components/ticketToPrint";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const Tickets = () => {
  const [showModalTicket, setShowModalTicket] = useState(false);
  const [expandTicket, setExpandTicket] = useState(true);

  const showDetailsTicket = () => {
    setExpandTicket((prev) => !prev);
    setShowModalTicket(false);
  };

  //Creare componente modale per ticket ({children})

  return (
    <div className={styles.Tickets}>
      <div className={styles.table}>
        <div className={styles.headerTable}>
          <h3>Data</h3>
          <h3>Ore</h3>
          <h3>Film</h3>
          <h3>Poltrona</h3>
        </div>
        <hr />
        <div className={styles.mainTable}>
          <div className={styles.ticketListTable}>
            {/* Da qui l'item */}
            <div className={styles.ticketItemTable}>
              <div className={styles.upSection}>
                <h4 className={styles.ticketId}>{id}</h4>
                <h4 className={styles.ticketTime}>{time}</h4>
                <h5 className={styles.ticketFilm}> {title} </h5>
                <h4 className={styles.ticketSeat}>{seat}</h4>
                <span
                  onClick={showDetailsTicket}
                  className={`${styles.expandIcon} ${
                    expandTicket && styles.expanded
                  }`}
                >
                  <AiOutlineCaretDown />
                </span>
              </div>
              <div
                className={`${styles.downSection} ${
                  expandTicket && styles.downSection__expanded
                }`}
              >
                <p onClick={() => setShowModalTicket((prev) => !prev)}>
                  Vedi la modale che piace tanto a Casimiro
                </p>
              </div>
            </div>
          </div>
          {/* Fino a qui l'item */}
        </div>
      </div>
      {showModalTicket && (
        <div>
          <TicketToPrint tickets={tickets} />
        </div>
      )}
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
  title: "Il viaggio di Pippo",
};

const { id, room, seat, time, title } = tickets;
