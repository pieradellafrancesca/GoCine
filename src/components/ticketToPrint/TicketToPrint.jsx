import styles from "./index.module.scss";
import { Fragment, useCallback, useRef } from "react";
import { toPng } from "html-to-image";

const TicketToPrint = ({ ticketContext, username }) => {
  const { seatNum, movie_title } = ticketContext.payload;
  const ref = useRef(null);

  const onBtnClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      // .then(() => alert("Il tuo ticket sta per essere scaricato! 😎"))
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${username}-Ticket`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <div ref={ref}>
        <div className={styles.TicketToPrint}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.cardLeft} ${styles.card}`}
          >
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
              <h2>
                {new Date(+ticketContext.payload.date)
                  .toLocaleTimeString()
                  .slice(0, 5)}
              </h2>
              <span>ore</span>
            </div>
          </div>
          <div className={`${styles.cardRight} ${styles.card}`}>
            {/* card */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                onBtnClick();
              }}
              className={styles.eye}
            ></div>
            <div className={styles.number}>
              <h3>{seatNum + 1}</h3>
              <span>poltrona</span>
            </div>
            <div className={styles.barcode}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketToPrint;
