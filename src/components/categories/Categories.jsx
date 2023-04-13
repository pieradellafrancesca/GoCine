import { useEffect, useState } from "react";
import { GET_GENRES } from "../../utils/https";
import styles from "./index.module.scss";

export default function Categories() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    GET_GENRES().then((data) => setGenres(data.genres));
  }, []);

  return (
    <div className={styles.Categories}>
      {genres.map((category) => (
        <button className={styles.btn} key={category.id}>
          {category.name}
        </button>
      ))}
    </div>
  );
}
