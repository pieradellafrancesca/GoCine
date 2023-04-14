import styles from "./index.module.scss";
import { IMG_BASE_URL } from "../../utils/https";

const Cast = ({ person }) => {
  return (
    <img className={styles.Cast} src={IMG_BASE_URL(person.profile_path)}></img>
  );
};
export default Cast;

const pippo = {
  adult: false,
  gender: 2,
  id: 135651,
  known_for_department: "Acting",
  name: "Michael B. Jordan",
  original_name: "Michael B. Jordan",
  popularity: 35.476,
  profile_path: "/kfcn0yyEdN2aJfVaxW0NIoKVF4J.jpg",
  cast_id: 1,
  character: "Adonis Creed",
  credit_id: "5e55bad21e922500181fbb71",
  order: 0,
};
