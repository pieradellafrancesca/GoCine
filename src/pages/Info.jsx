import styles from "../scss/pages/info.module.scss";
import { GET, GET_VIDEOS } from "../utils/https";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  numFormat,
  convertMinsToHrsMins,
  arrayShortener,
  sortDate,
} from "../utils/funcs";
import BackToHomeBtn from "../components/backToHomeBtn/BackToHomeBtn";

const Info = () => {
  const [dataMovie, setDataMovie] = useState({});
  const [trailerLink, setTrailerLink] = useState("");
  const [infoDescription, setInfoDescription] = useState({});
  const [infoCast, setInfoCast] = useState({});
  const { info } = useParams();

  const pippo = "15789";

  useEffect(() => {
    GET(info).then((data) => setDataMovie(data));
  }, []);

  useEffect(() => {
    GET_VIDEOS("15789").then((video) => setTrailerLink(video));
  }, [dataMovie]);

  useEffect(() => {
    GET("15789").then((data) => setInfoDescription(data));
  }, []);

  // ATTENZIONE!!!
  // useEffect(() => {
  //   fetch(
  //     https://api.themoviedb.org/3/movie/${15789}/credits?api_key=391dd5367d82bf498fbd0e575905a684
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setInfoCast(data));
  // }, []);

  // console.log(infoCast);

  const IMG_BASE_URL = (poster_path) => {
    const imgUrl = "https://image.tmdb.org/t/p/original" + poster_path;
    return imgUrl;
  };

  // const IMG_CAST_BASE_URL = (poster_path) => {
  //   const imgUrl = "https://image.tmdb.org/t/p/original" + poster_path;
  //   return imgUrl;
  // };

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
        </div>
      </div>
      <div className={styles.BackToHomeBtnContainer}>
        <Link to="/">
          <BackToHomeBtn />
        </Link>
      </div>
      {/* DOWN_SECTION */}
      <div className={styles.container}>
        <div className={styles.description}>
          <h5>About the movie</h5>
          <p>{infoDescription.overview}</p>
        </div>
        <div className={styles.cast}>
          <h5>Cast</h5>
          {/* <img
            className={styles.imageCast}
            src={IMG_CAST_BASE_URL(infoCast.cast[0].profile_path)}
            alt={infoCast.name}
          /> /}
          {/ <img
            className={styles.imageCast}
            src={https://image.tmdb.org/t/p/original/${infoCast.cast[2].profile_path}}
            alt="title"
          /> */}
          <button className={styles.btn}>Book Tickets</button>
        </div>
      </div>
    </section>
  );
};

export default Info;
