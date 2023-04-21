import Ticket from "../ticket/Ticket";
import styles from "./index.module.scss";

const TicketBox = ({ ticketList, setModalVisibility }) => {
  const modalOpen = () => {
    setModalVisibility(true);
  };

  return (
    <div
      className={`${styles.TicketBox} ${
        ticketList.length ? "section" : styles.void
      } flex flex-column justify-content-center align-items-center`}
    >
      {ticketList
        .sort((ticket1, ticket2) =>
          ticket1.seatNum > ticket2.seatNum ? 1 : -1
        )
        .map((ticket, i) => (
          <Ticket key={i} ticketData={ticket} />
        ))}
      {ticketList.length ? (
        <button className={styles.buyTicket} onClick={modalOpen}>
          Buy Tickets
        </button>
      ) : null}
    </div>
  );
};

export default TicketBox;
