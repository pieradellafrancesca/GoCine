import styles from "./index.module.scss";

const Hero = () => {
  const image = [
    "https://www.themoviedb.org/t/p/original/dBkvawTlvciUvW7jmNAtuvhdtdr.jpg",
    " https://www.themoviedb.org/t/p/original/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    "https://www.themoviedb.org/t/p/original/evaFLqtswezLosllRZtJNMiO1UR.jpg",
  ];

  return (
    <div className={styles.Hero}>
      <div className={styles.imageContainer}>
        {image.map((image, index) => {
          return (
            <div className={styles.singleImage} key={index}>
              <img src={image} alt={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
