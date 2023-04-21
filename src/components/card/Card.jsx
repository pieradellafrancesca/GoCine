import { numFormat } from "../../utils/funcs";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import VoteStars from "../voteStars";

export default function Card({ data, stylesData }) {
  const { title, overview, vote_count } = data;
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate(`/movie/${data.id}`);
  };

  return (
    <div onClick={onHandleClick} className={styles.Card} style={stylesData}>
      <div className={styles.imgWrapper}>
        <div className={styles.imgOverlay}></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
        />
      </div>
      <div className={styles.overview}>
        <h4>{title}</h4>
        <p>{`${overview.split(" ").splice(0, 25).join(" ")}...`}</p>
        <button className={styles.bookText}>Book your seat!</button>
      </div>
      <div className={styles.textInfo}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.ratingsWrapper}>
          <VoteStars data={data} />
          <span className={styles.voteCount}>{`(${numFormat(
            vote_count
          )})`}</span>
        </div>
      </div>
      <button className={styles.bookMobile}>Book Now!</button>
    </div>
  );
}
