import styles from "./index.module.scss";
import { GET_CAST } from "../../utils/https";
import { useState, useEffect } from "react";
import Cast from "../cast/Cast";

const CastList = () => {
  const [dataCast, setDataCast] = useState([]);

  useEffect(() => {
    GET_CAST("677179").then(({ cast } = data) => setDataCast(cast));
  }, []);

  console.log(dataCast);

  return (
    <div className={styles.CastList}>
      {dataCast
        .filter((person) => person.profile_path != null)
        .slice(0, 20)
        .map((person, id) => (
          <Cast person={person} key={id} />
        ))}
    </div>
  );
};
export default CastList;
