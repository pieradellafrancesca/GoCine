import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

import { GET_VIDEOS, GET, GET_CAST, GET_IMAGES } from "../../utils/https";
import { searchVideo } from "../../utils/funcs";

import videoMp4 from "/video.mp4";
import styles from "./index.module.scss";

export default function MainContent() {
  const { state, dispatch } = useContext(Context);
  const [movieData, setMovieData] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);
  const [movieBackDrop, setMovieBackDrop] = useState([]);

  const [video, setVideo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.movieID || state.nowPlaying[0]?.id) {
      GET(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then(
        (data) => setMovieData(data)
      );

      GET_CAST(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then(
        ({ cast, crew }) => {
          setMovieCast(cast);
          setMovieCrew(crew);
        }
      );

      GET_IMAGES(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then(
        ({ backdrops }) => {
          if (backdrops) {
            setMovieBackDrop(backdrops[8] ? backdrops[8] : backdrops[0]);
          }
        }
      );

      GET_VIDEOS(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then(
        ({ results }) => results && searchVideo(results, "Featurette", setVideo)
      );
    }

    setVideo(null);
  }, [state.movieID, state.nowPlaying]);

  const onHandleClick = () => {
    navigate(`/preorder/${movieData.id}`);
  };

  let step = window.innerWidth * (75 / 100);
  const refScroll = useRef();
  const handleScroll = (px) => {
    refScroll.current.scrollLeft += px;
  };

  return (
    <>
      <section className={styles.MainContent}>
        <div className={styles.videoWrapper}>
          <h4 className={styles.title}>about the movie</h4>

          {video ? (
            <iframe src={video} loading="lazy"></iframe>
          ) : (
            <video src={videoMp4} muted autoPlay={"autoplay"} loop></video>
          )}

          <div className={styles.btn} onClick={onHandleClick}>
            <p className={styles.btnText}>
              go watch{" "}
              <span className={styles.btnTitle}>
                {movieData && movieData.title?.split(" ").length > 3
                  ? `" ${movieData.title
                      .split(" ")
                      .splice(0, 2)
                      .join(" ")}... "`
                  : movieData.title}
              </span>
            </p>
          </div>
        </div>

        <div className={styles.infoMovie}>
          <div className={styles.imgWrapper}>
            <div className={styles.overlay}></div>
            {movieBackDrop.file_path && (
              <img
                src={`https://image.tmdb.org/t/p/original/${movieBackDrop.file_path}`}
                alt="backdrop"
                loading="lazy"
              />
            )}
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.listWrapper}>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>year</span>
                <span>{movieData.release_date}</span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>country </span>
                <span>
                  {movieData.production_countries?.map((item, i) => (
                    <span key={i}>{item.name} </span>
                  ))}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>genres</span>
                <span>
                  {movieData.genres?.map((item, i) => (
                    <span key={i}>{item.name} </span>
                  ))}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>directors</span>
                <span>
                  {movieCrew
                    ?.map(
                      (item, i) =>
                        item.known_for_department === "Directing" && (
                          <span key={i}>{item.name} </span>
                        )
                    )
                    .splice(0, 60)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>writing</span>
                <span>
                  {movieCrew
                    ?.map(
                      (item, i) =>
                        item.known_for_department === "Writing" && (
                          <span key={i}>{item.name} </span>
                        )
                    )
                    .splice(0, 40)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>production</span>
                <span>
                  {movieCrew
                    ?.map(
                      (item, i) =>
                        item.known_for_department === "Production" && (
                          <span key={i}>{item.name} </span>
                        )
                    )
                    .splice(0, 40)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>camera</span>
                <span>
                  {movieCrew
                    ?.map(
                      (item, i) =>
                        item.known_for_department === "Camera" && (
                          <span key={i}>{item.name} </span>
                        )
                    )
                    .splice(0, 20)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>sound</span>
                <span>
                  {movieCrew
                    ?.map(
                      (item, i) =>
                        item.known_for_department === "Sound" && (
                          <span key={i}>{item.name} </span>
                        )
                    )
                    .splice(0, 20)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>editing</span>
                <span>
                  {movieCrew
                    ?.map(
                      (item, i) =>
                        item.known_for_department === "Editing" && (
                          <span key={i}>{item.name} </span>
                        )
                    )
                    .splice(0, 60)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>art</span>
                <span>
                  {movieCrew
                    ?.map(
                      (item, i) =>
                        item.known_for_department === "Art" && (
                          <span key={i}>{item.name} </span>
                        )
                    )
                    .splice(0, 40)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>budget</span>
                <span>${movieData.budget}</span>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.titleRef}>time</span>
                <span>{movieData.runtime} min</span>
              </div>
            </div>
            <h2 className={styles.tagline}>
              "
              {movieData.tagline === ""
                ? `${movieData.overview.split(" ").splice(0, 10).join(" ")}...`
                : movieData.tagline}
              "
            </h2>
          </div>
        </div>
      </section>

      <div className={styles.cardListNav}>
        <h4 className={styles.navListTitle}>
          Actors <span>{movieCast?.length} characters</span>
        </h4>
        <div className={styles.navigation}>
          <button
            className={styles.control}
            onClick={() => handleScroll(-step)}
          >
            <RxDoubleArrowLeft />
          </button>
          <button className={styles.control} onClick={() => handleScroll(step)}>
            <RxDoubleArrowRight />
          </button>
        </div>
      </div>

      <div ref={refScroll} className={styles.CardListCast}>
        {movieCast?.map((item, i) => {
          if (item.profile_path) {
            return (
              <div className={styles.CardCast} key={i}>
                <div className={styles.imgWrapper}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.infoWrapper}>
                  <div className={styles.textWrapper}>
                    <span>role</span>
                    <span>
                      {item.character.split(" ").splice(0, 2).join(" ")}
                    </span>
                  </div>
                  <div className={styles.textWrapper}>
                    <span>actor </span>
                    <span>{item.name.split(" ").splice(0, 2).join(" ")}</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
