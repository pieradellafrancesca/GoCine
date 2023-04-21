import Seat from "../seat/Seat";
import styles from "./index.module.scss";

const SeatList = ({
  setCount,
  setTicketList,
  allSeats,
  ticketInfo,
  ticketList,
}) => {
  return (
    <div className={styles.SeatList}>
      <div className={styles.left}>
        {allSeats.map((element, i) => {
          if (i < 25) {
            return (
              <Seat
                seatData={element}
                seatNumber={i}
                key={i}
                setCount={setCount}
                setTicketList={setTicketList}
                ticketInfo={ticketInfo}
                isSelected={
                  ticketList.filter((ticket) => ticket.seatNum === i).length > 0
                    ? true
                    : false
                }
              />
            );
          }
        })}
      </div>
      <div className={styles.right}>
        {allSeats.map((element, i) => {
          if (i > 24) {
            return (
              <Seat
                seatData={element}
                seatNumber={i}
                key={i}
                setCount={setCount}
                setTicketList={setTicketList}
                ticketInfo={ticketInfo}
                isSelected={
                  ticketList.filter((ticket) => ticket.seatNum === i).length > 0
                    ? true
                    : false
                }
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SeatList;
