import styles from "./index.module.scss";

const ModalPayment = ({ setModalVisible }) => {
  const closeModal = () => {
    setModalVisible(false);
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
        <button className={styles.btn}>confirm payment</button>
      </div>
    </div>
  );
};
export default ModalPayment;
