import styles from "./index.module.scss";

const TicketToPrint = () => {
  return (
    <div className={styles.TicketToPrint}>
      <div className={`${styles.cardLeft} ${styles.card}`}>
        {/* card */}
        <h1>
          MovieGo <span>Cinema</span>
        </h1>
        <div className={styles.title}>
          <h2>{tickets.title}</h2>
          <span>movie</span>
        </div>
        <div className={styles.name}>
          <h2>Pippo</h2>
          <span>name</span>
        </div>
        <div className={styles.seat}>
          <h2>{tickets.seat}</h2>
          <span>seat</span>
        </div>
        <div className={styles.time}>
          <h2>{tickets.time}</h2>
          <span>time</span>
        </div>
      </div>
      <div className={`${styles.cardRight} ${styles.card}`}>
        {/* card */}
        <div className={styles.eye}></div>
        <div className={styles.number}>
          <h3>{tickets.seat}</h3>
          <span>seat</span>
        </div>
        <div className={styles.barcode}></div>
      </div>
    </div>
  );
};

export default TicketToPrint;

const tickets = {
  id: 121,
  room: 2,
  seat: "4-b",
  time: "18:00",
  title: "movie title",
};
