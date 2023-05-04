import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { movieData } from "../../utils/mock/mock";
import { movieCrew } from "../../utils/mock/mock";
import { movieCast } from "../../utils/mock/mock";
import { movieBackDrop } from "../../utils/mock/mock";

import { GET_VIDEOS } from "../../utils/https";

import styles from "./index.module.scss";

export default function MainContent() {
  const { release_date, production_countries, genres, title } = movieData;
  const [video, setVideo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    GET_VIDEOS("640146").then((data) => setVideo(data));
  }, []);

  const onHandleClick = () => {
    navigate("/preorder/640146");
  };

  return (
    <>
      <div className={styles.MainContent}>
        <div className={styles.videoWrapper}>
          <h4 className={styles.title}>about the movie</h4>
          <iframe src={video}></iframe>
          <div className={styles.btn} onClick={onHandleClick}>
            <p className={styles.btnText}>
              go watch{" "}
              <span className={styles.btnTitle}>
                "{title.split(" ").splice(0, 2).join(" ")}..."
              </span>
            </p>
          </div>
        </div>
        <div className={styles.infoMovie}>
          <div className={styles.imgWrapper}>
            <div className={styles.overlay}></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieBackDrop[25].file_path}`}
              alt=""
            />
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.listWrapper}>
              <div className={styles.textWrapper}>
                <span>year</span>
                <span>{release_date}</span>
              </div>
              <div className={styles.textWrapper}>
                <span>country </span>
                <span>{production_countries.map((item) => item.name)}</span>
              </div>
              <div className={styles.textWrapper}>
                <span>genres</span>
                <span>{genres.map((item) => item.name).join(", ")}</span>
              </div>
              <div className={styles.textWrapper}>
                <span>directors</span>
                <span>
                  {movieCrew.map(
                    (item) =>
                      item.known_for_department === "Directing" && item.name
                  )}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span>writing</span>
                <span>
                  {movieCrew
                    .map(
                      (item) =>
                        item.known_for_department === "Writing" && item.name
                    )
                    .splice(0, 40)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span>production</span>
                <span>
                  {movieCrew
                    .map(
                      (item) =>
                        item.known_for_department === "Production" && item.name
                    )
                    .splice(0, 40)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span>camera</span>
                <span>
                  {movieCrew.map(
                    (item) =>
                      item.known_for_department === "Camera" && item.name
                  )}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span>sound</span>
                <span>
                  {movieCrew
                    .map(
                      (item) =>
                        item.known_for_department === "Sound" && item.name
                    )
                    .splice(0, 40)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span>editing</span>
                <span>
                  {movieCrew.map(
                    (item) =>
                      item.known_for_department === "Editing" && item.name
                  )}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span>art</span>
                <span>
                  {movieCrew
                    .map(
                      (item) => item.known_for_department === "Art" && item.name
                    )
                    .splice(0, 40)}
                </span>
              </div>
              <div className={styles.textWrapper}>
                <span>budget</span>
                <span>${movieData.budget}</span>
              </div>
              <div className={styles.textWrapper}>
                <span>time</span>
                <span>{movieData.runtime} min</span>
              </div>
            </div>
            <h2 className={styles.tagline}>"{movieData.tagline}"</h2>
          </div>
        </div>
      </div>

      <div className={styles.cardListNav}>
        <h4 className={styles.navListTitle}>
          Actors <span>{movieCast.length} characters</span>
        </h4>
        <div className={styles.navControls}>
          <p className={styles.control}></p>
          <p className={styles.control}></p>
          <p className={styles.control}></p>
        </div>
      </div>

      <div className={styles.CardListCast}>
        {movieCast.map((item) => {
          if (item.profile_path) {
            return (
              <div className={styles.CardCast}>
                <div className={styles.imgWrapper}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                    alt=""
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
