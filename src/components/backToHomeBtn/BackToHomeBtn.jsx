import styles from "./index.module.scss";
import { IoIosArrowBack } from "react-icons/io";

const BackToHomeBtn = () => {
  return (
    <button className={styles.BackToHomeBtn}>
      <IoIosArrowBack />
    </button>
  );
};

export default BackToHomeBtn;
