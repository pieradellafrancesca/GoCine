import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import CardList from "../cardList";

export default function MainContent({ onLoadContent }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      await new Promise((res) => {
        setLoader(true);
        onLoadContent();
        res();
        setLoading(false);
      });
    };
    loadContent();
  }, [onLoadContent]);

  return (
    <div className={styles.MainContent}>
      {/* {loader && <div>Loading...</div>} */}

      <CardList endpoint={"now_playing"} catName="Now Playing" />
      <CardList endpoint={"popular"} catName="Popular" />
    </div>
  );
}
