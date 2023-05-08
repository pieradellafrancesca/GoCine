import Ticket from "../ticket/Ticket";
import styles from "./index.module.scss";

const TicketBox = ({ ticketList, setModalVisibility, selectedHour }) => {
  const modalOpen = () => {
    setModalVisibility(true);
  };

  return (
    <div
      className={`${styles.TicketBox} flex flex-column justify-content-start align-items-center`}
    >
      {ticketList
        .sort((ticket1, ticket2) =>
          ticket1.seatNum > ticket2.seatNum ? 1 : -1
        )
        .map((ticket, i) => (
          <Ticket key={i} ticketData={ticket} />
        ))}
      {!ticketList.length ? <p>Here your selection...</p> : null}
      <button
        className={styles.buyTicket}
        onClick={modalOpen}
        disabled={!selectedHour || !ticketList.length}
      >
        Pay ${" "}
        {ticketList.reduce((acc, ticket) => acc + ticket.price, 0).toFixed(2)}
      </button>
    </div>
  );
};

export default TicketBox;
