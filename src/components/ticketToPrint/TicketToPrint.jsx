import styles from "./index.module.scss";

const TicketToPrint = ({ modalTicketContext, username }) => {
  const { parsedDate, time, seatNum, movie_title } = modalTicketContext.payload;
  console.log(modalTicketContext);
  return (
    <div className={styles.TicketToPrint}>
      <div className={`${styles.cardLeft} ${styles.card}`}>
        {/* card */}
        <h1>
          MovieGo <span>Cinema</span>
        </h1>
        <div className={styles.title}>
          <h2>{movie_title}</h2>
          <span>film</span>
        </div>
        <div className={styles.name}>
          <h2>{username}</h2>
          <span>nome</span>
        </div>
        <div className={styles.seat}>
          <h2>{seatNum + 1}</h2>
          <span>poltrona</span>
        </div>
        <div className={styles.time}>
          <h2>{time}</h2>
          <span>ore</span>
        </div>
      </div>
      <div className={`${styles.cardRight} ${styles.card}`}>
        {/* card */}
        <div className={styles.eye}></div>
        <div className={styles.number}>
          <h3>{seatNum + 1}</h3>
          <span>poltrona</span>
        </div>
        <div className={styles.barcode}></div>
      </div>
    </div>
  );
};

export default TicketToPrint;
