import styles from "../scss/pages/tickets.module.scss";
// import TicketToPrint from "../components/ticketToPrint";
// import UserTicket from "../components/userTicket/UserTicket";
import { useState, useContext, useRef, Fragment } from "react";
import { Context } from "../context";
import TicketItem from "../components/ticketItem";
import TicketToPrint from "../components/ticketToPrint";

const Tickets = () => {
  const { state, dispatch } = useContext(Context);
  const { username } = state.currentUserData;
  const { tickets } = state.currentUserData;

  const userTickets = tickets.filter((ticket) => ticket.title != "movie title"); //Prevent undefined Test-Tickets
  const [ticketContext, setTicketContext] = useState({
    isVisible: false,
    payload: {},
  });

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

  return (
    <div className={styles.Tickets}>
      <div className={styles.ticketContainer}>
        <h2 onClick={() => console.log(ticketContext)} className={styles.title}>
          {username}'s tickets
        </h2>
        {getDate().length < 1 ? (
          <>
            <hr />
            <h3>Non è presente alcun ticket</h3>
          </>
        ) : (
          <>
            {getDate().map((dateOfTicket, i) => (
              <Fragment key={i}>
                <h4 className={styles.day}>
                  {dateOfTicket[1] == "/"
                    ? dateOfTicket.slice(0, 1) +
                      " " +
                      monthName[getMonth(dateOfTicket) - 1]
                    : dateOfTicket.slice(0, 2) +
                      " " +
                      monthName[getMonth(dateOfTicket) - 1]}
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
                      <TicketItem
                        ticket={ticket}
                        key={ticket.date + i}
                        setTicketContext={setTicketContext}
                      />
                    ))}
                </div>
              </Fragment>
            ))}
          </>
        )}
      </div>

      <div
        onClick={() =>
          setTicketContext((prev) => ({
            ...prev,
            isVisible: !prev.isVisible,
          }))
        }
        className={`${styles.ticketToPrintContainer} ${
          ticketContext.isVisible && styles.showContainer
        }`}
      >
        <div
          className={`${styles.ticketToPrint} ${
            ticketContext.isVisible && styles.moveToMid
          }`}
        >
          <TicketToPrint ticketContext={ticketContext} username={username} />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
