import styles from "./index.module.scss";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const UserTicket = ({ tickets, setShowModalTicket }) => {
  const { id, seat, time, title } = tickets;
  const [expandTicket, setExpandTicket] = useState(true);

  const showDetailsTicket = () => {
    setExpandTicket((prev) => !prev);
    setShowModalTicket(false);
  };

  return (
    <div className={styles.UserTicket}>
      <div className={styles.upSection}>
        <h4 className={styles.ticketId}>{id}</h4>
        <h4 className={styles.ticketTime}>{time}</h4>
        <h5 className={styles.ticketFilm}> {title} </h5>
        <h4 className={styles.ticketSeat}>{seat}</h4>
        <span
          onClick={showDetailsTicket}
          className={`${styles.expandIcon} ${expandTicket && styles.expanded}`}
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
  );
};

export default UserTicket;
