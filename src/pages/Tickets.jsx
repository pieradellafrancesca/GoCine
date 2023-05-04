import styles from "../scss/pages/tickets.module.scss";
// import TicketToPrint from "../components/ticketToPrint";
// import UserTicket from "../components/userTicket/UserTicket";
import { useState, useContext, useRef } from "react";
import { Context } from "../context";

const Tickets = () => {
  const { state, dispatch } = useContext(Context);
  const { username } = state.currentUserData;
  const { tickets } = state.currentUserData;
  const userTickets = tickets.filter((ticket) => ticket.title != "movie title"); //Prevent undefined Test-Tickets

  const [ticketLineIsActive, setTicketLineIsActive] = useState(false);

  const getDate = () => {
    const dateList = userTickets
      .sort((a, b) => b.date - a.date)
      .map((ticket) => new Date(+ticket.date).toLocaleDateString());
    const removeDuplicate = [...new Set(dateList)];
    const dateTickets = removeDuplicate;
    return dateTickets;
  };

  const monthName = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  const getMonth = (arr) => {
    const dateArr = arr.split("/");
    const month = dateArr[1];
    return month;
  };

  const onHandleClickTicket = () => {
    setTicketLineIsActive((prev) => !prev);
    console.log(ticketLineIsActive);
  };

  return (
    <div className={styles.Tickets}>
      <div className={styles.ticketContainer}>
        <h2 className={styles.title}>I ticket di {username}</h2>
        {getDate().length < 1 ? (
          <>
            <hr />
            <h3>Non è presente alcun ticket</h3>
          </>
        ) : (
          <>
            {getDate().map((dateOfTicket) => (
              <>
                <h4 className={styles.day}>
                  {dateOfTicket[1] == "/"
                    ? dateOfTicket.slice(0, 1) +
                      " " +
                      monthName[getMonth(dateOfTicket) - 1]
                    : dateOfTicket.slice(0, 2) +
                      " " +
                      monthName[getMonth(dateOfTicket)] -
                      1}
                </h4>
                <hr />
                <div className={styles.dayTickets}>
                  {userTickets
                    .sort((a, b) => a.date - b.date)
                    .filter(
                      (ticket) =>
                        new Date(+ticket.date).toLocaleDateString() ===
                        dateOfTicket
                    )
                    .map((ticket, i) => (
                      <div onClick={onHandleClickTicket} key={i}>
                        <h4>
                          {new Date(+ticket.date)
                            .toLocaleTimeString()
                            .slice(0, 5)}{" "}
                          / {"Poltrona n." + ticket.seatNum + 1}
                        </h4>
                      </div>
                    ))}
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

{
  /* <div className={styles.table}>
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
            {userTickets
              .filter((item) => item.title != "movie title")
              .map((ticket, i) => (
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
      </div> */
}
export default Tickets;
