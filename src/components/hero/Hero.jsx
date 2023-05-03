import { movieData } from "../../utils/mock/mock";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
          alt=""
        />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{movieData.title}</h1>
        <div className={styles.trailerContainer}>
          <h4>trailer title</h4>
          <video src=""></video>
          <p>genres</p>
          <p>overview</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
