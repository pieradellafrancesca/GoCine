import { useState } from "react";

import { useParams } from "react-router-dom";
import NavButton from "../components/navButton";
import CinemaRoom from "../components/cinemaRoom/CinemaRoom";
import ModalPayment from "../components/modalPayment";
import Loader from "../components/loader";
import TicketBox from "../components/ticketBox";
import styles from "../scss/pages/index.module.scss";

const Preorder = () => {
  const [ticketList, setTicketList] = useState([]);
  const { id } = useParams();
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
      <CinemaRoom setTicketList={setTicketList} id={id} />
      <TicketBox ticketList={ticketList} />
      {modalVisible && <ModalPayment setModalVisible={setModalVisible} />}
      <button className={styles.btnModal} onClick={modalClose}>
        buy now
      </button>

    </section>
  );
};

export default Preorder;
