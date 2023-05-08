import { useState, useEffect, useContext, useRef } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { Context } from "../../context";

import { GET, GET_VIDEOS } from "../../utils/https";
import { searchVideo } from "../../utils/funcs";

import videoMp4 from "/video.mp4";
import styles from "./index.module.scss";

const Hero = () => {
  const { state, dispatch } = useContext(Context);
  const [movieList, setMovieList] = useState([]);
  const [movieData, setMovieData] = useState({});
  const [video, setVideo] = useState(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (state.movieID || state.nowPlaying[0]?.id) {
      GET(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then(
        (data) => {
          if (data) {
            setMovieData(data);
          }
        }
      );

      GET_VIDEOS(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then(
        ({ results }) => results && searchVideo(results, "Trailer", setVideo)
      );
    }

    setVideo(null);
  }, [state.movieID, state.nowPlaying]);

  useEffect(() => {
    if (state.movieID) {
      setActive(state.movieID);
      return;
    } else {
      setActive(movieList[0]?.id);
      return;
    }
  }, [state.movieID, movieList[0]?.id]);

  useEffect(() => {
    GET("popular").then(({ results }) => {
      setMovieList(results);
      dispatch({ type: "SET_NOW_PLAYING", payload: results });
    });
  }, []);

  const refScroll = useRef();
  let step = window.innerWidth * (25 / 100);
  const handleScroll = (px) => {
    refScroll.current.scrollLeft += px;
  };

  const handleClick = (movieID) => {
    dispatch({ type: "SET_MOVIE_ID", payload: movieID });
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.imageContainer}>
        {movieData.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`}
            alt={movieData?.title}
            loading="lazy"
          />
        )}
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{movieData.title}</h1>
        <div className={styles.trailerContainer}>
          <h4>trailer title</h4>

          {video ? (
            <iframe
              src={video}
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            ></iframe>
          ) : (
            <video src={videoMp4} muted autoPlay={"autoplay"} loop></video>
          )}

          <div>
            <span className={styles.adult}>18+</span>
            {movieData.genres?.map((item, i) => (
              <span key={i}> {item.name} </span>
            ))}
          </div>
          <p>{movieData.overview}</p>
        </div>
      </div>
      <div className={styles.navigation}>
        <button className={styles.control} onClick={() => handleScroll(-step)}>
          <RxDoubleArrowLeft />
        </button>
        <ul ref={refScroll} className={styles.filterList}>
          {movieList.map((item, i) => {
            return (
              <button
                className={active === item.id ? styles.active : null}
                onClick={() => handleClick(item.id)}
                key={i}
                title={item.title}
              >
                {item.title.split(" ").length > 3
                  ? `${item.title.split(" ").splice(0, 2).join(" ")} ...`
                  : item.title}
              </button>
            );
          })}
        </ul>
        <button className={styles.control} onClick={() => handleScroll(step)}>
          <RxDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};
export default Hero;
