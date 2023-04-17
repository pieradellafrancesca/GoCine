import Seat from "../seat/Seat";
import styles from "./index.module.scss";

const SeatList = ({ seatList, setCount }) => {
  return (
    <div className={styles.SeatList}>
      {seatList.map((element, i) => (
        <Seat seatData={element} key={i} setCount={setCount} />
      ))}
    </div>
  );
};

export default SeatList;
