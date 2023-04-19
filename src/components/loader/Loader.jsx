import styles from "./index.module.scss";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <img
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        alt="loading"
        width="50"
      />
    </div>
  );
};
export default Loader;
