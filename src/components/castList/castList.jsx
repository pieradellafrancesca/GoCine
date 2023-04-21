import styles from "./index.module.scss";
import { GET_CAST } from "../../utils/https";
import { arrShortener } from "../../utils/funcs";
import { useState, useEffect } from "react";
import Cast from "../cast";

const CastList = ({ info, setShowShadow }) => {
  const [dataCast, setDataCast] = useState([]);
  const shortCast = arrShortener(dataCast, "profile_path", 20);

  useEffect(() => {
    GET_CAST(info).then(({ cast } = data) => setDataCast(cast));
  }, []);

  // if (shortCast.length >= 9) {
  //   setShowShadow(true);
  // } else {
  //   setShowShadow(false);
  // }

  return (
    <div className={styles.CastList}>
      {shortCast.map((person, id) => (
        <Cast person={person} key={id} />
      ))}
    </div>
  );
};
export default CastList;
