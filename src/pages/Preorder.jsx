import { useState } from "react";
import NavButton from "../components/navButton";
import CinemaRoom from "../components/cinemaRoom/CinemaRoom";
import styles from "../scss/pages/preorder.module.scss";
import ModalPayment from "../components/modalPayment";
import Loader from "../components/loader";
const Preorder = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalClose = () => {
    setModalVisible((prev) => !prev);
  };
  return (
    <section
      className={`${styles.Preorder} section flex flex-column justify-content-center align-items-center`}
    >
      <h2>Preorder Page</h2>
      <Loader />
      <NavButton />
      <CinemaRoom />
      {modalVisible && <ModalPayment setModalVisible={setModalVisible} />}
      <button className={styles.btnModal} onClick={modalClose}>
        buy now
      </button>
    </section>
  );
};

export default Preorder;
