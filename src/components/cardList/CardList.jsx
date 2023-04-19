import { useEffect, useState } from "react";
import { GET } from "../../utils/https";
import Card from "../card";
import styles from "./index.module.scss";
import Loader from "../loader";

export default function CardList({ children, endpoint }) {
  const [movieList, setMovieList] = useState([]);
  const [loaders, setLoaders] = useState(false);

  useEffect(() => {
    setLoaders(true);
    GET(endpoint).then((data) => {
      setLoaders(false);
      setMovieList(data.results);
    });
  }, []);

  return (
    <>
      {children}
      <div className={`${styles.CardList}`}>
        <div className={styles.loaderCard}>{loaders && <Loader />}</div>
        {movieList.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </>
  );
}
