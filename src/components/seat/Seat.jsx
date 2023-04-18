import { useState } from "react";
import styles from "./index.module.scss";

const Seat = ({ seatData, setCount, setTicketList, seatNumber }) => {
  const [selectedSeat, setSelectedSeat] = useState(false);

  const onHandleClick = (seatNumber) => {
    if (!seatData) {
      if (selectedSeat) {
        setCount((prev) => prev - 1);
        setTicketList((prev) => {
          const newArr = [...prev];
          newArr.splice(newArr.indexOf(seatNumber), 1);
          return newArr;
        });
      }
      if (!selectedSeat) {
        setCount((prev) => prev + 1);
        setTicketList((prev) => [...prev, seatNumber]);
      }
      setSelectedSeat((prev) => !prev);
    }
  };

  return (
    <div
      className={`${styles.Seat} ${seatData && styles.reserved} ${
        selectedSeat && styles.selected
      }`}
      onClick={() => onHandleClick(seatNumber)}
    ></div>
  );
};

export default Seat;
