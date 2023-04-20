import styles from "./index.module.scss";
import CardList from "../cardList";

export default function MainContent() {
  return (
    <div className={styles.MainContent}>
      <CardList endpoint={"now_playing"} catName="Now Playing" />
      <CardList endpoint={"popular"} catName="Popular" />
    </div>
  );
}
