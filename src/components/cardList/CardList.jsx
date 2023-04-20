import { useEffect, useState } from "react";
import { GET } from "../../utils/https";
import Card from "../card";
import styles from "./index.module.scss";

export default function CardList({ endpoint, catName }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => {
      setMovieList(data.results);
    });
  }, []);

  return (
    <>
      <h3 className={styles.catTitle}>{catName}</h3>
      <div className={`${styles.CardList}`}>
        {movieList.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </>
  );
}
