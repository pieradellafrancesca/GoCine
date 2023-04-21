import styles from "./index.module.scss";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const UserTicket = ({ ticket, setModalTicketContext }) => {
  const { date, seatNum, movie_title } = ticket;
  const [expandTicket, setExpandTicket] = useState(false);

  const showDetailsTicket = () => {
    setExpandTicket((prev) => !prev);
    setModalTicketContext({ payload: {}, isVisible: false });
  };

  const time = new Date(+date).toLocaleTimeString().slice(0, 5);
  const parsedDate = new Date(+date).toLocaleDateString();

  return (
    <div className={styles.UserTicket}>
      <div className={styles.upSection}>
        <h4 className={styles.ticketId}>{parsedDate}</h4>
        <h4 className={styles.ticketTime}>{time}</h4>
        <h5 className={styles.ticketFilm}>{movie_title}</h5>
        <h4 className={styles.ticketSeat + 1}>{seatNum}</h4>
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
        <p
          onClick={() =>
            setModalTicketContext({
              payload: { ...ticket, parsedDate, time },
              isVisible: true,
            })
          }
        >
          Vedi la modale che piace tanto a Casimiro
        </p>
      </div>
    </div>
  );
};

export default UserTicket;
