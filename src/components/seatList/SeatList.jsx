import Seat from "../seat/Seat";
import styles from "./index.module.scss";

const SeatList = ({
  setCount,
  setTicketList,
  allSeats,
  ticketInfo,
  setTicketInfo,
  ticketList,
}) => {
  return (
    <div className={styles.SeatList}>
      {allSeats.map((element, i) => (
        <Seat
          seatData={element}
          seatNumber={i}
          key={i}
          setCount={setCount}
          setTicketList={setTicketList}
          ticketInfo={ticketInfo}
          setTicketInfo={setTicketInfo}
          isSelected={
            ticketList.filter((ticket) => ticket.seatNum === i).length > 0
              ? true
              : false
          }
        />
      ))}
    </div>
  );
};

export default SeatList;
