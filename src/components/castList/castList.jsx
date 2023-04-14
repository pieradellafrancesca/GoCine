import styles from "./index.module.scss";
import Cast from "../components/cast";

const CastList = () => {
  return (
    <div className={styles.CastList}>
      <Cast />
    </div>
  );
};
export default CastList;
