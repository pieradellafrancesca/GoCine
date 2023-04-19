import Seat from "../seat/Seat";
import styles from "./index.module.scss";

const SeatList = ({ setCount, setTicketList, allSeats }) => {
  return (
    <div className={styles.SeatList}>
      {allSeats.map((element, i) => (
        <Seat
          seatData={element}
          seatNumber={i}
          key={i}
          setCount={setCount}
          setTicketList={setTicketList}
        />
      ))}
    </div>
  );
};

export default SeatList;
