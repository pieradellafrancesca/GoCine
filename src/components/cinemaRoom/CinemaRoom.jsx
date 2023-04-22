import { useEffect, useState } from "react";
import { GET } from "../../utils/https";
import { timetable } from "../../utils/mock/timetable";
import SeatList from "../seatList/SeatList";
import styles from "./index.module.scss";

import { db } from "../../../firebaseConfig";
import { onValue, ref } from "firebase/database";

const CinemaRoom = ({
  setTicketList,
  id,
  setTicketInfo,
  ticketInfo,
  ticketList,
  reload,
  count,
  setCount,
}) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [selectedHour, setSelectedHour] = useState(null);
  const [room, setRoom] = useState({});
  const [allSeats, setAllSeats] = useState(Array(50).fill(false));
  const [activeBtn, setActiveBtn] = useState("");

  useEffect(() => {
    GET(id).then((data) => {
      setMovieInfo(data);
      setTicketInfo((prev) => ({ ...prev, movie_title: data.title }));
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "rooms");
    return onValue(query, (snapShot) => {
      const data = snapShot.val();
      setRoom(data);
      if (room[id]) {
        // console.log("trovato!");
        if (room[id][selectedHour]) {
          // console.log("Ci sono posti prenotati");
          setAllSeats(room[id][selectedHour]);
        } else {
          // console.log("Sala vuota");
          setAllSeats(Array(50).fill(false));
        }
      } else {
        // console.log("NON trovato!");
      }
    });
  }, [selectedHour, reload]);

  const onHourClick = (e) => {
    setSelectedHour(e.target.value);
    setCount(0);
    setTicketList([]);
    setTicketInfo((prev) => ({ ...prev, date: e.target.value }));
    setActiveBtn(+e.target.value);
  };

  return (
    <div
      className={`${styles.CinemaRoom} flex flex-column justify-content-center align-items-center`}
    >
      <div
        className={`${styles.upperLeftInfo} flex flex-column justify-content-center align-items-center`}
      >
        <p className={`${selectedHour && styles.notVisible}`}>Pick a time:</p>
        <section className={`${styles.hour} flex`}>
          {timetable.map((hour) => (
            <button
              className={`${styles.btn} ${
                activeBtn === hour.value && styles.active
              }`}
              value={hour.value}
              onClick={onHourClick}
              key={hour.id}
            >
              {hour.time}
            </button>
          ))}
        </section>
      </div>
      <div className={styles.upperRightInfo}>
        <p className={styles.todaysMovie}>{movieInfo.title}</p>
        <div className={styles.imgOverlay}></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`}
          alt={movieInfo.title}
        />
      </div>

      {selectedHour && (
        <>
          <ul className={styles.showcase}>
            <li>
              <div className={styles.seatAvailable}></div>
              <small>Available</small>
            </li>
            <li>
              <div className={styles.seatSelected}></div>
              <small>Selected</small>
            </li>
            <li>
              <div className={styles.seatReserved}></div>
              <small>Reserved</small>
            </li>
          </ul>

          <SeatList
            setCount={setCount}
            setTicketList={setTicketList}
            allSeats={allSeats}
            ticketInfo={ticketInfo}
            setTicketInfo={setTicketInfo}
            ticketList={ticketList}
          />

          <p className={styles.text}>
            You have selected <span className={styles.bookInfo}>{count}</span>{" "}
            seats for <span className={styles.bookInfo}>{movieInfo.title}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default CinemaRoom;
