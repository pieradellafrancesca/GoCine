import styles from "./index.module.scss";

const TicketItem = ({ ticket, setTicketContext }) => {
  const onHandleClickTicket = () =>
    setTicketContext((prev) => ({
      isVisible: !prev.isVisible,
      payload: { ...ticket },
    }));
  return (
    <div onClick={onHandleClickTicket} className={styles.TicketItem}>
      <h4>
        {new Date(+ticket.date).toLocaleTimeString().slice(0, 5)} • Poltrona n.{" "}
        <span>{ticket.seatNum + 1}</span>
      </h4>
    </div>
  );
};

export default TicketItem;
