import { useState, useEffect, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Context } from "../../context";

import { GET, GET_VIDEOS } from "../../utils/https";
import videoMp4 from "../../../public/video.mp4";
import styles from "./index.module.scss";

const Hero = () => {
  const { state, dispatch } = useContext(Context);
  const [movieData, setMovieData] = useState({});
  const [video, setVideo] = useState(null);

  useEffect(() => {
    GET(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then((data) =>
      setMovieData(data)
    );

    GET_VIDEOS(
      state.movieID ? state.movieID : state.nowPlaying[0]?.id,
      "Trailer"
    ).then((data) => setVideo(data));

    setVideo(null);
    // console.log(movieData);
  }, [state.movieID, state.nowPlaying]);

  return (
    <div className={styles.Hero}>
      <div className={styles.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
          alt=""
        />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{movieData.title}</h1>
        <div className={styles.trailerContainer}>
          <h4>trailer title</h4>

          {video ? (
            <iframe src={video}></iframe>
          ) : (
            <video src={videoMp4} muted autoPlay={"autoplay"} loop></video>
          )}

          <p>
            <span className={styles.adult}>18+</span>
            {movieData.genres?.map((item, i) => (
              <span key={i}> {item.name} </span>
            ))}
          </p>
          <p>{movieData.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
