import styles from "./index.module.scss";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";

const Header = ({ username }) => {
  const [userSelected, setUserSelected] = useState(false);
  const [iconSelected, setIconSelected] = useState("");

  const onHandleUserCLick = () => {
    setUserSelected((prev) => !prev);
  };

  const onHandleIconCLick = (icon) => {
    setIconSelected(icon);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.userInfo}>
        <p>User</p>
        <h4 onClick={onHandleUserCLick} className={styles.username}>
          {username}
          <span>{userSelected ? "▴" : "▾"}</span>
        </h4>
      </div>
      <div className={styles.icons}>
        <BiSearch
          id="searchIcon"
          onClick={(e) => onHandleIconCLick(e.target.id)}
          className={iconSelected === "searchIcon" && styles.clicked}
        />
        <IoNotificationsOutline
          id="notIcon"
          onClick={(e) => onHandleIconCLick(e.target.id)}
          className={iconSelected === "notIcon" && styles.clicked}
        />
      </div>
    </div>
  );
};

export default Header;
