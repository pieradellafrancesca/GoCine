import { useEffect, useState } from "react";
import { GET } from "../../utils/https";
import { todaysShows, nextDaysShows } from "../../utils/funcs";
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
    false,
    false,
    false,
    false,
  ]);

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
  }, [selectedHour, reload]);

  const onHourClick = (e) => {
    setSelectedHour(e.target.value);
    setCount(0);
    setTicketList([]);
    setTicketInfo((prev) => ({ ...prev, date: e.target.value }));
    setActiveBtn(+e.target.value);
  };

  return (
    <div className={styles.CinemaRoom}>
      <div className={styles.upperInfo}>
        <div className={styles.upperLeftInfo}>
          {!selectedHour && <p>Select a time</p>}
          <section className={`${styles.hour} flex`}>
            <button
              className={`${styles.btn} ${
                activeBtn === Date.parse(todaysShows(18, 0, 0)) && styles.active
              }`}
              onClick={onHourClick}
              value={Date.parse(todaysShows(18, 0, 0))}
            >
              {todaysShows(18, 0, 0).toLocaleTimeString("en-EN", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </button>
            <button
              className={`${styles.btn} ${
                activeBtn === Date.parse(todaysShows(21, 30, 0)) &&
                styles.active
              }`}
              onClick={onHourClick}
              value={Date.parse(todaysShows(21, 30, 0))}
            >
              {todaysShows(21, 30, 0).toLocaleTimeString("en-EN", {
                month: "short",
                // weekday: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </button>
            <button
              className={`${styles.btn} ${
                activeBtn === Date.parse(nextDaysShows(18, 0, 0, 1)) &&
                styles.active
              }`}
              onClick={onHourClick}
              value={Date.parse(nextDaysShows(18, 0, 0, 1))}
            >
              {nextDaysShows(18, 0, 0, 1).toLocaleString("en-EN", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </button>
            <button
              className={`${styles.btn} ${
                activeBtn === Date.parse(nextDaysShows(21, 30, 0, 1)) &&
                styles.active
              }`}
              onClick={onHourClick}
              value={Date.parse(nextDaysShows(21, 30, 0, 1))}
            >
              {nextDaysShows(21, 30, 0, 1).toLocaleString("en-EN", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
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
      {selectedHour && (
        <>
          <p className={styles.text}>
            You have selected <span className={styles.bookInfo}>{count}</span>{" "}
            seats for <span className={styles.bookInfo}>{movieInfo.title}</span>
          </p>

          <SeatList
            setCount={setCount}
            setTicketList={setTicketList}
            allSeats={allSeats}
            ticketInfo={ticketInfo}
            setTicketInfo={setTicketInfo}
            ticketList={ticketList}
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
        </>
      )}
    </div>
  );
};

export default CinemaRoom;
