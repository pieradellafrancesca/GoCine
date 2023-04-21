import { useContext } from "react";
import { Context } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import styles from "./index.module.scss";

const UserMiniModal = ({ userSelected }) => {
  const { state, dispatch } = useContext(Context);
  const { logout } = useUserAuth();
  const navigate = useNavigate();

  // ===== // ===== //
  // Logout Firebase Authentication - Filippo

  const handleLogout = async () => {
    try {
      // #1 logout function setted in the UserAuthContext.jsx file
      await logout();
      navigate("/login");
      // #2 Set the user logout state in the localStorage
      window.localStorage.setItem("isLogged", JSON.stringify(false));
      // #3 Once the user has logged out the data must be cleaned
      window.localStorage.setItem("currentUser", JSON.stringify(null));
      dispatch({ type: "SET_CURRENT_USER_DATA", payload: null });
    } catch (error) {
      console.log(error.message);
    }
  };

  // ===== // ===== //

  return (
    <div
      className={`${styles.UserMiniModal} ${
        userSelected && styles.showMiniModal
      }`}
    >
      <Link className={styles.ticketsLink} to="/developers">
        <p>developers</p>
      </Link>
      <p onClick={handleLogout}>Logout</p>
    </div>
  );
};

export default UserMiniModal;
