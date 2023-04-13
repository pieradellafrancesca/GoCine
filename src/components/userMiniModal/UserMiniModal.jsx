import styles from "./index.module.scss";

const UserMiniModal = ({ userSelected }) => {
  return (
    <div
      className={`${styles.UserMiniModal} ${
        userSelected && styles.showMiniModal
      }`}
    >
      <p>Lista prenotazioni</p>
      <p>Logout</p>
    </div>
  );
};

export default UserMiniModal;
