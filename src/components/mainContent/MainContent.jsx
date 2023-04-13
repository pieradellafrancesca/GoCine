import styles from "./index.module.scss";
import CardList from "../cardList";
import Categories from "../categories";

export default function MainContent() {
  return (
    <div className={styles.MainContent}>
      <Categories />
      <CardList endpoint={"now_playing"}>
        <h2 className={styles.catTitle}>now playing</h2>
      </CardList>
      <CardList endpoint={"popular"}>
        <h2 className={styles.catTitle}>popular</h2>
      </CardList>
    </div>
  );
}
