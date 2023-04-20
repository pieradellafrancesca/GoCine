import styles from "../scss/pages/tickets.module.scss";
import TicketToPrint from "../components/ticketToPrint";
import UserTicket from "../components/userTicket/UserTicket";
import { useState, useContext } from "react";
import { Context } from "../context";

const Tickets = () => {
  //Creare componente modale per ticket ({children})
  const [modalTicketContext, setModalTicketContext] = useState({
    peyload: {},
    isVisible: false,
  });

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
        </div>
        <hr />
        <div className={styles.mainTable}>
          <div className={styles.ticketListTable}>
            {userTickets.map((ticket, i) => (
              <UserTicket
                ticket={ticket}
                setModalTicketContext={setModalTicketContext}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      {modalTicketContext.isVisible && (
        <div>
          <TicketToPrint
            modalTicketContext={modalTicketContext}
            username={username}
          />{" "}
          {/* Utilizzare il context */}
        </div>
      )}
    </div>
  );
};

export default Tickets;
