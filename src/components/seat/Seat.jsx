import { useState } from "react";
import styles from "./index.module.scss";

const Seat = ({ seatData, setCount }) => {
  const [selectedSeat, setSelectedSeat] = useState(false);

  const onHandleClick = (event) => {
    if (!event.target.className.includes("reserved")) {
      if (event.target.className.includes("selected")) {
        setCount((prev) => prev - 1);
      } else if (!event.target.className.includes("selected")) {
        setCount((prev) => prev + 1);
      }
      setSelectedSeat((prev) => !prev);
    }
  };

  return (
    <div
      className={`${styles.Seat} ${seatData && styles.reserved} ${
        selectedSeat && styles.selected
      }`}
      onClick={onHandleClick}
    ></div>
  );
};

export default Seat;
