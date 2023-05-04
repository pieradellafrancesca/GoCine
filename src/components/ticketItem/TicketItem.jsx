import styles from "./index.module.scss";
import { useState } from "react";

const TicketItem = ({ ticket }) => {
  const [ticketLineIsActive, setTicketLineIsActive] = useState(false);
  const onHandleClickTicket = () => setTicketLineIsActive((prev) => !prev);

  return (
    <>
      <div onClick={onHandleClickTicket} className={styles.TicketItem}>
        <h4>
          {new Date(+ticket.date).toLocaleTimeString().slice(0, 5)} /{" "}
          {"Poltrona n." + ticket.seatNum + 1}
        </h4>
      </div>

      <div
        className={`${styles.seeTicket} ${ticketLineIsActive && styles.show}`}
      >
        <p>Vedi il ticket</p>
      </div>
    </>
  );
};

export default TicketItem;
