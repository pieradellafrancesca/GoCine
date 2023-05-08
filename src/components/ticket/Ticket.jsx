import styles from "./index.module.scss";

const Ticket = ({ ticketData }) => {
  return (
    <div className={styles.Ticket}>
      <div className={styles.wrapper}>
        <p className={styles.infoUp}>{ticketData.movie_title}</p>
        <p className={styles.infoDown}>Movie</p>
      </div>
      <div className={styles.wrapper}>
        <p className={`${styles.infoUp} ${styles.date}`}>
          {new Date(parseInt(ticketData.date)).toLocaleString("en-En", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className={styles.infoDown}>Time</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.infoUp}>{ticketData.seatNum + 1}</p>
        <p className={styles.infoDown}>Seat</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.infoUp}>${ticketData.price.toFixed(2)}</p>
        <p className={styles.infoDown}>Price</p>
      </div>
    </div>
  );
};

export default Ticket;
