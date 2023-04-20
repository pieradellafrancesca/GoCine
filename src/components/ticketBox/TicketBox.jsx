import { useState } from "react";
import Ticket from "../ticket/Ticket";
import ModalPayment from "../modalPayment";
import styles from "./index.module.scss";

const TicketBox = ({ ticketList, setTicketList, setReload }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const modalOpen = () => {
    setModalVisibility(true);
    console.log(ticketList);
  };

  return (
    <div
      className={`${styles.TicketBox} ${
        ticketList.length ? "section" : styles.void
      } flex flex-column justify-content-center align-items-center`}
    >
      {ticketList.map((ticket, i) => (
        <Ticket key={i} ticketData={ticket} />
      ))}
      {ticketList.length ? (
        <button className={styles.buyTicket} onClick={modalOpen}>
          Buy Tickets
        </button>
      ) : (
        <p className={styles.pickSeat}>Pick a seat...</p>
      )}
      {modalVisibility && (
        <ModalPayment
          setModalVisibility={setModalVisibility}
          ticketList={ticketList}
          setTicketList={setTicketList}
          setReload={setReload}
        />
      )}
    </div>
  );
};

export default TicketBox;
