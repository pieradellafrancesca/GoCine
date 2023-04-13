import styles from "../scss/pages/index.module.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <section
      className={`${styles.Home} section flex flex-column justify-content-center align-items-center`}
    >
      <Navbar />
      <h1>Home Page</h1>
      <Footer />
    </section>
  );
};

export default Home;
