import { useState } from "react";
import { useParams } from "react-router-dom";
import { todaysShows } from "../utils/funcs";
import CinemaRoom from "../components/cinemaRoom/CinemaRoom";
import TicketBox from "../components/ticketBox";
import ModalPayment from "../components/modalPayment";
import styles from "../scss/pages/index.module.scss";

const Preorder = () => {
  const { info } = useParams();
  const [ticketList, setTicketList] = useState([]);
  const [ticketInfo, setTicketInfo] = useState({
    date: Date.parse(todaysShows(18, 0, 0)),
    seatNum: "",
    movie_title: "",
    movie_id: info,
  });
  const [modalVisibility, setModalVisibility] = useState(false);
  const [reload, setReload] = useState(false);

  return (
    <section
      className={`${styles.Preorder} section flex flex-column justify-content-center align-items-center`}
    >
      <h2>Preorder Page</h2>

      <CinemaRoom
        setTicketList={setTicketList}
        id={info}
        setTicketInfo={setTicketInfo}
        ticketInfo={ticketInfo}
        ticketList={ticketList}
        reload={reload}
      />
      <TicketBox
        ticketList={ticketList}
        setTicketList={setTicketList}
        setReload={setReload}
        setModalVisibility={setModalVisibility}
      />
      {modalVisibility && (
        <ModalPayment
          setModalVisibility={setModalVisibility}
          ticketList={ticketList}
          setTicketList={setTicketList}
          setReload={setReload}
        />
      )}
    </section>
  );
};

export default Preorder;
