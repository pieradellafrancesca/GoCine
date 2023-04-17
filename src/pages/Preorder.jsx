import NavButton from "../components/navButton";
import CinemaRoom from "../components/cinemaRoom/CinemaRoom";
import styles from "../scss/pages/index.module.scss";

const Preorder = () => {
  return (
    <section
      className={`${styles.Preorder} section flex flex-column justify-content-center align-items-center`}
    >
      <h2>Preorder Page</h2>
      <NavButton />
      <CinemaRoom />
    </section>
  );
};

export default Preorder;
