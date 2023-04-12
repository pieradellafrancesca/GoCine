import styles from "../scss/pages/index.module.scss";
import Navbar from "../components/navbar/Navbar";

import Header from "../components/header";

const Home = () => {
  return (
    <section
      className={`${styles.Home} section flex flex-column justify-content-center align-items-center`}
    >
      <Header username="Pippo" />
      <Navbar />
      <h1>Home Page</h1>
    </section>
  );
};

export default Home;
