import styles from "../scss/pages/tickets.module.scss";
import TicketToPrint from "../components/ticketToPrint";
import UserTicket from "../components/userTicket/UserTicket";
import { useState } from "react";

const Tickets = () => {
  const [showModalTicket, setShowModalTicket] = useState(false);

  //Creare componente modale per ticket ({children})

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
            <UserTicket
              tickets={tickets}
              setShowModalTicket={setShowModalTicket}
            />
            <UserTicket
              tickets={tickets}
              setShowModalTicket={setShowModalTicket}
            />
            <UserTicket
              tickets={tickets}
              setShowModalTicket={setShowModalTicket}
            />
          </div>
        </div>
      </div>
      {showModalTicket && (
        <div>
          <TicketToPrint tickets={tickets} />
        </div>
      )}
    </div>
  );
};

export default Tickets;

const tickets = {
  id: 121,
  room: 2,
  seat: "4-b",
  time: "18:00",
  title: "Il viaggio di Pippo",
};
