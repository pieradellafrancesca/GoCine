import styles from "../scss/pages/info.module.scss";
import { GET, GET_VIDEOS } from "../utils/https";
import { useState, useEffect } from "react";
import {
  numFormat,
  convertMinsToHrsMins,
  arrayShortener,
  sortDate,
} from "../utils/funcs";

const Info = () => {
  const [dataMovie, setDataMovie] = useState({});
  const [trailerLink, setTrailerLink] = useState("");

  const pippo = "15789";

  useEffect(() => {
    GET("19").then((data) => setDataMovie(data));
  }, []);

  useEffect(() => {
    GET_VIDEOS("15789").then((video) => setTrailerLink(video));
  }, [dataMovie]);

  const IMG_BASE_URL = (poster_path) => {
    const imgUrl = "https://image.tmdb.org/t/p/original" + poster_path;
    return imgUrl;
  };

  const space = " ";

  return (
    <section className={`${styles.Info} flex flex-column`}>
      <div className={styles.upSection}>
        <div className={styles.trailerSection}>
          {dataMovie?.video ? (
            <>
              <video src={trailerLink} className={styles.trailer}></video>
              {/* TODO: Vedi https://stackoverflow.com/questions/62124288/how-to-load-and-play-a-youtube-video-in-react */}
            </>
          ) : (
            <>
              <img
                className={styles.posterPath}
                src={IMG_BASE_URL(dataMovie?.poster_path)}
                alt={dataMovie.title}
              />
            </>
          )}
        </div>
        <div
          className={`${styles.infoMovie} flex flex-column align-items-center justify-content-center`}
        >
          {/* TODO: Sistemare stile */}
          <h2 className={styles.title}>{dataMovie.title}</h2>
          <p className={styles.otherInfo}>
            {convertMinsToHrsMins(dataMovie.runtime)} • {space}
            {arrayShortener(dataMovie.genres).join(", ")} • {space}
            {dataMovie.release_date && sortDate(dataMovie.release_date)}{" "}
            {/* TODO: chiedere a Giuseppe */}
          </p>
          <div className={styles.voteInfo}>
            <div
              className={styles.voteAverage}
              style={{
                "--rating": `${dataMovie.vote_average}`,
              }}
            ></div>
            <span className={styles.voteCount}>{`(${numFormat(
              dataMovie.vote_count
            )})`}</span>
          </div>
          {/* TODO: creare button "back-to-home" */}
        </div>
      </div>
    </section>
  );
};

export default Info;
