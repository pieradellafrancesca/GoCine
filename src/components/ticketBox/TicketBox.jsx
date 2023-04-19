import styles from "./index.module.scss";

const TicketBox = ({ ticketList }) => {
  return (
    <div
      className={`${styles.TicketBox} section flex flex-column justify-content-center align-items-center`}
    >
      {ticketList.map((ticket, i) => (
        <div
          className={`${styles.ticket} flex justify-content-center align-items-center`}
          key={i}
        >
          <span>Ticket {i + 1}</span>
          <span> Seat: {ticket + 1}</span>
        </div>
      ))}
      {ticketList.length ? (
        <button className={styles.buyTicket}>Buy Ticket</button>
      ) : (
        <p>Select a seat...</p>
      )}
    </div>
  );
};

export default TicketBox;
