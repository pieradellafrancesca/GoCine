import { useEffect, useState } from "react";
import { GET } from "../../utils/https";
import Card from "../card";
import styles from "./index.module.scss";

export default function CardList({ children, endpoint }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setMovieList(data.results));
  }, []);

  return (
    <>
      {children}
      <div className={`${styles.CardList}`}>
        {movieList.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </>
  );
}
