import { useEffect, useState, useRef } from "react";
import { GET } from "../../utils/https";
import Card from "../card";
import styles from "./index.module.scss";
import ScrollButtons from "../scrollButtons";

export default function CardList({ endpoint, catName }) {
  const [movieList, setMovieList] = useState([]);

  const refScroll = useRef(null);
  const scroll = (spaceNum) => {
    refScroll.current.scrollLeft += spaceNum;
  };

  useEffect(() => {
    GET(endpoint).then((data) => {
      setMovieList(data.results);
    });
  }, []);

  return (
    <>
      <h3 className={styles.catTitle}>{catName}</h3>

      <div className={`${styles.CardList}`}>

<div ref={refScroll} className={`${styles.CardList}`}>
        {movieList.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
      <div className={styles.invisibleBar}>
        <ScrollButtons clickEvent={scroll} spaceNum={-840} content={"⇦"} />
        <ScrollButtons clickEvent={scroll} spaceNum={840} content={"⇨"} />
      </div>
    </>
  );
}
