import styles from '../scss/pages/home.module.scss';
import Navbar from '../components/navbar';
import MainContent from '../components/mainContent';

const Home = () => {
  return (
    <section
      className={`${styles.Home} section flex flex-column justify-content-center align-items-center`}
    >
      <Navbar />
      <h1>Home Page</h1>
      <MainContent />
    </section>
  );
};

export default Home;
