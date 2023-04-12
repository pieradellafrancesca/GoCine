import NavButton from '../components/navButton';
import styles from '../scss/pages/index.module.scss';

const Tickets = () => {
  return (
    <section
      className={`${styles.Tickets} section flex flex-column justify-content-center align-items-center`}
    >
      <h2>Tickets Page</h2>
      <NavButton />
    </section>
  );
};

export default Tickets;
