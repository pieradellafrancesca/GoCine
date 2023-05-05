import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import { db } from "../../../firebaseConfig";
import { onValue, ref } from "firebase/database";
import { dbMaker, userTicket } from "../../utils/firebase";
import { commafy } from "../../utils/funcs";
import styles from "./index.module.scss";

const ModalPayment = ({
  setModalVisibility,
  ticketList,
  setTicketList,
  setReload,
  ticketInfo,
  setCount,
  setPopupVisibility,
}) => {
  const [room, setRoom] = useState({});
  const [users, setUsers] = useState({});
  const { state, dispatch } = useContext(Context);

  const closeModal = () => {
    setModalVisibility(false);
  };

  useEffect(() => {
    const query = ref(db, "rooms");
    return onValue(query, (snapShot) => {
      const data = snapShot.val();
      setRoom(data);
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "users");
    return onValue(query, (snapShot) => {
      const data = snapShot.val();
      setUsers(data);
      // console.log(data[state.currentUserData.id]);
    });
  }, []);

  const onHandlePayment = () => {
    dbMaker(room, ticketList, ticketList[0].movie_id, ticketList[0].date);
    userTicket(users, state.currentUserData.id, ticketList);
    setTicketList([]);
    setReload((prev) => !prev);
    setModalVisibility(false);
    setCount(0);
    setPopupVisibility(true);
  };

  return (
    <div className={styles.ModalPayment}>
      <div className={styles.overlay}></div>
      <div
        className={`${styles.modal} flex flex-column justify-content-center align-items-center`}
      >
        <button className={styles.btnClose} onClick={closeModal}>
          ✖
        </button>
        <div
          className={`${styles.container} flex flex-column justify-content-start`}
        >
          <h5>{ticketInfo.movie_title}</h5>
          <p>
            <span>Seats:</span>{" "}
            {commafy(ticketList.map((ticket) => ticket.seatNum + 1))}
          </p>
          <p>
            <span>Date/hour:</span>{" "}
            {new Date(parseInt(ticketInfo.date)).toLocaleString("en-En", {
              day: "2-digit",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p>
            <span>Total Price:</span> ${" "}
            {ticketList
              .reduce((acc, ticket) => acc + ticket.price, 0)
              .toFixed(2)}
          </p>
          <div className={styles.paymentTerms}>
            <p>
              <span>Terms of payment:</span>
            </p>
            <div className={styles.paymentBar}>
              <input
                className={styles.inputCart}
                type="password"
                value="1234 5678 9012 3456"
                placeholder="Card Number"
                disabled
              />
              <img
                className={styles.imageMsc}
                src="https://pluspng.com/img-png/mastercard-hd-png-mastercard-png-picture-1456.png"
                alt="non trovato"
              />
              <img
                className={styles.imageVisa}
                src="https://lofrev.net/wp-content/photos/2016/07/visa_logo_7.jpg"
                alt="non trovato"
              />
            </div>
          </div>
        </div>
        <button className={styles.confirmationBtn} onClick={onHandlePayment}>
          confirm payment
        </button>
      </div>
    </div>
  );
};
export default ModalPayment;
