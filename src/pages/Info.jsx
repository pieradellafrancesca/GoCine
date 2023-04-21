import styles from "../scss/pages/info.module.scss";
import { GET, GET_VIDEOS, IMG_BASE_URL } from "../utils/https";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  numFormat,
  convertMinsToHrsMins,
  genreShortener,
  sortDate,
} from "../utils/funcs";
import CastList from "../components/castList";
import VoteStars from "../components/voteStars";
import Loader from "../components/loader";
// In data 14 aprile il componente CastList viene renderizzato correttamente solo quando importato in questo modo
// import CastList from "../components/castList/CastList/";
// Probabilmente è legato al fatto che è stato modificato il nome del componente da castList.jsx a Castlist.jsx

const Info = () => {
  const [dataMovie, setDataMovie] = useState({});
  const [trailerLink, setTrailerLink] = useState("");
  const { info } = useParams();
  const [loaders, setLoaders] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // con questo metodo riportiamo la pagina info alla posizione iniziale (scroll)
    GET(info)
      .then((data) => setDataMovie(data))
      .then();
  }, []);

  useEffect(() => {
    setLoaders(true);
    GET_VIDEOS(info).then((video) => {
      setLoaders(false);
      setTrailerLink(video);
    });
  }, [dataMovie]);

  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate("preorder");
  };

  const space = " ";

  const linkVideo = true; // per il test poi sostituire con il valore relativo

  return (
    <section className={`${styles.Info} flex flex-column`}>
      <div className={`${styles.upSection} ${linkVideo && styles.fillScreen}`}>
        <div className={styles.trailerSection}>
          {loaders && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}

          {linkVideo ? (
            <>
              <iframe
                className="video"
                height="100%"
                width="100%"
                title="Youtube player"
                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                src={`${trailerLink}?autoplay=1&enablejsapi=1&mute=1`}
                autoPlay="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
          <h2 className={styles.title}>{dataMovie.title}</h2>
          <p className={styles.otherInfo}>
            {convertMinsToHrsMins(dataMovie.runtime)} • {space}
            {genreShortener(dataMovie.genres).join(", ")} • {space}
            {dataMovie.release_date && sortDate(dataMovie.release_date)}{" "}
          </p>
          <div className={styles.voteInfo}>
            <VoteStars data={dataMovie} />
            <span className={styles.voteCount}>{`(${numFormat(
              dataMovie.vote_count
            )})`}</span>
          </div>
        </div>
      </div>

      <div className={styles.downSection}>
        <div
          className={`${styles.description} flex flex-column align-items-center justify-content-center`}
        >
          <h5>About the movie</h5>
          <p>{dataMovie.overview}</p>
        </div>
        <div className={styles.cast}>
          <h5>Cast</h5>
          <div className={`${styles.list} ${showShadow && styles.shadow}`}>
            <CastList setShowShadow={setShowShadow} info={info} />
          </div>
        </div>
        <button className={styles.buyTicketBtn} onClick={onHandleClick}>
          Book Tickets
        </button>
      </div>
    </section>
  );
};

export default Info;

//       console.log(window.pageYOffset);
