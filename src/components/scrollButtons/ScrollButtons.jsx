import styles from "./index.module.scss";

const ScrollButtons = ({ content, clickEvent, spaceNum }) => {
  return (
    <button
      onClick={() => {
        clickEvent(spaceNum);
      }}
      className={styles.ScrollButtons}
    >
      {content}
    </button>
  );
};

export default ScrollButtons;
