import { numFormat } from "../../utils/funcs";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

export default function Card({ data }) {
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate(`/${data.id}`);
  };

  return (
    <div onClick={onHandleClick} className={styles.Card}>
      <div className={styles.imgWrapper}>
        <div className={styles.imgOverlay}></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
        />
      </div>
      <div className={styles.textInfo}>
        <h5 className={styles.title}>{data.title}</h5>
        <div className={styles.ratingsWrapper}>
          <div
            className={styles.voteAverage}
            style={{
              "--rating": `${data.vote_average}`,
            }}
          ></div>
          <span className={styles.voteCount}>{`(${numFormat(
            data.vote_count
          )})`}</span>
        </div>
      </div>
    </div>
  );
}
