import NavButton from "../components/navButton";
import styles from "../scss/pages/index.module.scss";

const Info = () => {
  return (
    <section
      className={`${styles.Info} section flex flex-column justify-content-center align-items-center`}
    >
      <h2>Info Movie Page</h2>
      <NavButton />
    </section>
  );
};

export default Info;
