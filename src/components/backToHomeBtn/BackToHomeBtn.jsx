import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { IoIosArrowBack } from "react-icons/io";

const BackToHomeBtn = ({ endpoint, className }) => {
  return (
    <Link to={endpoint} className={className}>
      <IoIosArrowBack />
    </Link>
  );
};

export default BackToHomeBtn;
