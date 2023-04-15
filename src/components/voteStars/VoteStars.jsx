import styles from "./index.module.scss";

const VoteStars = ({ data }) => {
  return (
    <div
      className={styles.VoteStars}
      style={{
        "--rating": `${data.vote_average}`,
      }}
    ></div>
  );
};

export default VoteStars;
