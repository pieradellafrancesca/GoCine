import { useEffect, useState } from "react";
import { rooms } from "../../utils/mock/rooms";
import { GET } from "../../utils/https";
import SeatList from "../seatList/SeatList";
import styles from "./index.module.scss";

const CinemaRoom = () => {
  const [todaysMovieInfo, setTodaysMovieInfo] = useState({});
  const [selectedRoom, setSelectedRoom] = useState(1);
  const [selectedHour, setSelectedHour] = useState(1);
  const [seatList, setSeatList] = useState(rooms[0].shows[0].seats);
  const [count, setCount] = useState(0);

  useEffect(() => {
    GET(rooms[selectedRoom - 1].movie_id).then((data) =>
      setTodaysMovieInfo(data)
    );
  }, [selectedRoom]);

  const onRoomChange = (e) => {
    setSelectedRoom(e.target.value);
    setSeatList(rooms[e.target.value - 1].shows[selectedHour - 1].seats);
    setCount(0);
  };

  const onHourChange = (e) => {
    setSelectedHour(e.target.value);
    setSeatList(rooms[selectedRoom - 1].shows[e.target.value - 1].seats);
    setCount(0);
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
          <section className={styles.selection}>
            {/* <label htmlFor="room">Pick the room:</label> */}
            <select
              name="room"
              id="room"
              className={styles.room}
              value={selectedRoom}
              onChange={onRoomChange}
            >
              {rooms.map((room) => (
                <option value={room.room_id} key={room.room_id}>
                  Room {room.room_id}
                </option>
              ))}
            </select>

            {/* <label htmlFor="hour">Pick the hour:</label> */}
            <select
              name="hour"
              id="hour"
              className={styles.hour}
              value={selectedHour}
              onChange={onHourChange}
            >
              <option value="1">
                {new Date(new Date().setHours(18, 0)).toLocaleTimeString(
                  "en-EN",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </option>
              <option value="2">
                {new Date(new Date().setHours(20, 30)).toLocaleTimeString(
                  "en-EN",
                  { hour: "2-digit", minute: "2-digit" }
                )}
              </option>
            </select>
          </section>
        </div>
        <div className={styles.upperRightInfo}>
          <p className={styles.todaysMovie}>{todaysMovieInfo.title}</p>
          <div className={styles.imgOverlay}></div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${todaysMovieInfo.backdrop_path}`}
            alt={todaysMovieInfo.title}
          />
        </div>
      </div>
      <p className={styles.text}>
        You have selected <span className={styles.bookInfo}>{count}</span> seats
        for <span className={styles.bookInfo}>{todaysMovieInfo.title}</span>
      </p>
      <SeatList seatList={seatList} setCount={setCount} />
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
