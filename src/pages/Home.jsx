import { useState } from "react";
import styles from "../scss/pages/index.module.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import UserMiniModal from "../components/userMiniModal";
import MainContent from "../components/mainContent";
import Hero from "../components/hero";



const Home = () => {
  const [userSelected, setUserSelected] = useState(false);

  return (
    <section
      className={`${styles.Home} section flex flex-column justify-content-center align-items-center`}
    >
      <Header
        username="Casimimmo"
        userSelected={userSelected}
        setUserSelected={setUserSelected}
      />
      <UserMiniModal userSelected={userSelected} />
      <Navbar />
      <h1>Home Page</h1>


      <Hero />
      <MainContent />
      <Footer />

    </section>
  );
};

export default Home;
