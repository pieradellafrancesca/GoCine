import styles from "../scss/pages/tickets.module.scss";
import TicketToPrint from "../components/ticketToPrint";
import UserTicket from "../components/userTicket/UserTicket";
import { useState, useContext, useRef } from "react";
import { Context } from "../context";

const Tickets = () => {
  const [modalTicketContext, setModalTicketContext] = useState({
    payload: {},
    isVisible: false,
  });

  const goToTicket = () => {
    refTicket.current?.scrollIntoView({ behavior: "smooth" });
  };

  const refTicket = useRef(null);

  const { state, dispatch } = useContext(Context);
  const { tickets: userTickets } = state.currentUserData;
  const { username } = state.currentUserData;
  let ticketDate;
  userTickets.map((ticket) => {
    ticketDate = new Date(+ticket.date).toLocaleDateString();
    /* toLocaleString("en-En", {
      day: "2-digit",
      month: "short",
    }); */
  });

  return (
    <div className={styles.Tickets}>
      <div className={styles.table}>
        <div className={styles.headerTable}>
          <h3>Data</h3>
          <h3>Ore</h3>
          <h3>Film</h3>
          <h3>Poltrona</h3>
          <h3> </h3>
        </div>
        <hr />
        <div className={styles.mainTable}>
          <div className={styles.ticketListTable}>
            {userTickets.map((ticket, i) => (
              <UserTicket
                goToTicket={goToTicket}
                ticket={ticket}
                setModalTicketContext={setModalTicketContext}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.containerForScroll} ref={refTicket}>
        <div
          className={`${styles.ticketToPrintContainer} ${
            modalTicketContext.isVisible && styles.showModal
          }`}
        >
          <TicketToPrint
            modalTicketContext={modalTicketContext}
            username={username}
          />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
