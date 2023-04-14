import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/https";

const Cast = () => {
  const [infoCast, setInfoCast] = useState({});

  useEffect(() => {
    GET("15789/credits").then((data) => setInfoCast(data));
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
