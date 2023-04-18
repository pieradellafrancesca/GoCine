import { useEffect, useState } from "react";
import { GET } from "../../utils/https";
import SeatList from "../seatList/SeatList";
import styles from "./index.module.scss";

import { db } from "../../../firebaseConfig";
import { onValue, ref } from "firebase/database";

const CinemaRoom = ({ setTicketList, id }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [selectedHour, setSelectedHour] = useState(
    Date.parse(new Date(new Date().setHours(18, 0, 0)))
  );
  const [count, setCount] = useState(0);
  const [room, setRoom] = useState({});
  const [allSeats, setAllSeats] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    GET(id).then((data) => setMovieInfo(data));
  }, []);

  useEffect(() => {
    const query = ref(db, "rooms");
    return onValue(query, (snapShot) => {
      const data = snapShot.val();
      console.log(data);
      setRoom(data);
      if (room[id]) {
        console.log("trovato!");
        if (room[id][selectedHour]) {
          console.log("Ci sono posti prenotati");
          setAllSeats(room[id][selectedHour]);
        } else {
          console.log("Sala vuota");
          setAllSeats([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ]);
        }
      } else {
        console.log("NON trovato!");
      }
    });
  }, [selectedHour]);

  const onHourClick = (e) => {
    setSelectedHour(e.target.value);
    setCount(0);
    setTicketList([]);
    console.log(Date.parse(new Date(new Date().setHours(20, 30, 0))), e);
  };

  return (
    <div className={styles.CinemaRoom}>
      <div className={styles.upperInfo}>
        <div className={styles.upperLeftInfo}>
          <p className={styles.date}>
            {new Date().toLocaleString("en-EN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <section className={`${styles.hour} flex`}>
            <button
              className={styles.btn}
              onClick={onHourClick}
              value={Date.parse(new Date(new Date().setHours(18, 0, 0)))}
            >
              {new Date(new Date().setHours(18, 0, 0)).toLocaleTimeString(
                "en-EN",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </button>
            <button
              className={styles.btn}
              onClick={onHourClick}
              value={Date.parse(new Date(new Date().setHours(20, 30, 0)))}
            >
              {new Date(new Date().setHours(20, 30, 0)).toLocaleTimeString(
                "en-EN",
                { hour: "2-digit", minute: "2-digit" }
              )}
            </button>
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
      </div>
      <p className={styles.text}>
        You have selected <span className={styles.bookInfo}>{count}</span> seats
        for <span className={styles.bookInfo}>{movieInfo.title}</span>
      </p>

      <SeatList
        setCount={setCount}
        setTicketList={setTicketList}
        allSeats={allSeats}
      />
      <div className={styles.lowerInfo}>
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
      </div>
    </div>
  );
};

export default CinemaRoom;
