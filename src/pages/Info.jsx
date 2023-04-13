import styles from "../scss/pages/info.module.scss";
import { GET } from "../utils/https";
import { useState, useEffect } from "react";
import { convertMinsToHrsMins, arrayShortener } from "../utils/funcs";

const Info = () => {
  const [dataMovie, setDataMovie] = useState({});

  useEffect(() => {
    GET("15789").then((data) => setDataMovie(data));
  }, []);

  const IMG_BASE_URL = (poster_path) => {
    const imgUrl = "https://image.tmdb.org/t/p/original/" + poster_path;
    return imgUrl;
  };

  const space = " ";

  console.log(Intl.DateTimeFormat("it", { month: "long" }).format(new Date()));
  //-------------------------------------------
  //PEr la funzione che restituisce la data

  // pippo.split("-").map(num => +num)

  return (
    <section className={`${styles.Info} flex flex-column`}>
      <div className={styles.upSection}>
        <div className={styles.trailerSection}>
          {dataMovie.video ? (
            <>
              <video
                src="https://youtu.be/5Peo-ivmupE"
                className={styles.trailer}
              ></video>
            </>
          ) : (
            <>
              <img
                className={styles.posterPath}
                src={IMG_BASE_URL(dataMovie.poster_path)}
                alt=""
              />
            </>
          )}
        </div>
        <div
          className={`${styles.infoMovie} flex flex-column align-item-center justify-content-center`}
        >
          <h2 className={styles.title}>{dataMovie.title}</h2>
          <p className={styles.otherInfo}>
            {convertMinsToHrsMins(dataMovie.runtime)} • {space}
            {arrayShortener(dataMovie.genres).join(", ")} • 7 marzo, 2030
          </p>
          <div className={styles.voteInfo}>⭐⭐⭐⭐⭐ (45k)</div>
          {/* TODO: creare button "back-to-home" */}
        </div>
      </div>
    </section>
  );
};

export default Info;
