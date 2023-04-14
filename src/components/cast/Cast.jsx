import styles from "./index.module.scss";
import { useState, useEffect } from "react";

const Cast = () => {
  const [infoCast, setInfoCast] = useState({});

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/${15789}/credits?api_key=391dd5367d82bf498fbd0e575905a684"
    )
      .then((res) => res.json())
      .then((data) => setInfoCast(data));
  }, []);
  return (
    <div className={styles.Cast}>
      <img
        className={styles.imageCast}
        src={
          "https://image.tmdb.org/t/p/original/${infoCast.cast[0].profile_path}"
        }
        alt={infoCast.original_name}
      />
    </div>
  );
};
export default Cast;
