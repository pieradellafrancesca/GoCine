import { useState } from "react";
import { useParams } from "react-router-dom";
import NavButton from "../components/navButton";
import CinemaRoom from "../components/cinemaRoom/CinemaRoom";
import TicketBox from "../components/ticketBox";
import styles from "../scss/pages/index.module.scss";

const Preorder = () => {
  const [ticketList, setTicketList] = useState([]);
  const { id } = useParams();
  return (
    <section
      className={`${styles.Preorder} section flex flex-column justify-content-center align-items-center`}
    >
      <h2>Preorder Page</h2>
      <NavButton />
      <CinemaRoom setTicketList={setTicketList} id={id} />
      <TicketBox ticketList={ticketList} />
    </section>
  );
};

export default Preorder;
