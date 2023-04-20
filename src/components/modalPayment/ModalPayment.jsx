import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import { db } from "../../../firebaseConfig";
import { onValue, ref } from "firebase/database";
import { dbMaker, userTicket } from "../../utils/firebase";
import styles from "./index.module.scss";

const ModalPayment = ({
  setModalVisibility,
  ticketList,
  setTicketList,
  setReload,
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
      console.log(data[state.currentUserData.id]);
    });
  }, []);

  const onHandlePayment = () => {
    dbMaker(room, ticketList, ticketList[0].movie_id, ticketList[0].date);
    userTicket(users, state.currentUserData.id, ticketList);
    setTicketList([]);
    setReload((prev) => !prev);
    setModalVisibility(false);
  };
  return (
    <div className={styles.ModalPayment}>
      <div className={styles.modal}>
        <div className={styles.container}>
          <h5>Titolo film selezionato</h5>
          <button className={styles.btnClose} onClick={closeModal}>
            x
          </button>
          <p>Posto selezionato</p>
          <p>Giorno/ora</p>
          <p>Quantità biglietti</p>
          <p>Modalita di pagamento</p>
          <input
            className={styles.inputCart}
            type="text"
            name="numero"
            placeholder="numero carta"
          />
          <img
            className={styles.imageVisa}
            src="https://pluspng.com/img-png/mastercard-hd-png-mastercard-png-picture-1456.png"
            alt="non trovato"
          />
          <img
            src="https://lofrev.net/wp-content/photos/2016/07/visa_logo_7.jpg"
            alt="non trovato"
          />
        </div>
        <button className={styles.btn} onClick={onHandlePayment}>
          confirm payment
        </button>
      </div>
    </div>
  );
};
export default ModalPayment;
