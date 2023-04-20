import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const image = [
    "https://www.themoviedb.org/t/p/original/dBkvawTlvciUvW7jmNAtuvhdtdr.jpg",
    " https://www.themoviedb.org/t/p/original/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    "https://www.themoviedb.org/t/p/original/evaFLqtswezLosllRZtJNMiO1UR.jpg",
  ];

  useEffect(() => {
    let timer;
    if (hover) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        setIndex((prev) => {
          if (prev < image.length - 1) {
            return prev + 1;
          } else {
            return 0;
          }
        });
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [hover]);

  return (
    <div className={styles.Hero}>
      <div
        className={styles.imageContainer}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className={styles.singleImage}>
          <div className={styles.dots}>
            {image.map((item, i) => (
              <button
                className={`${index === i && styles.active}`}
                key={i}
                onClick={() => setIndex(i)}
              ></button>
            ))}
          </div>
          <img src={image[index]} alt={"foto"} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
