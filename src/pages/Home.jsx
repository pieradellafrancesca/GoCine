import { useState } from "react";
import styles from "../scss/pages/home.module.scss";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer";
// import Header from "../components/header";
// import UserMiniModal from "../components/userMiniModal";
import MainContent from "../components/mainContent";
import Hero from "../components/hero";
import Loader from "../components/loader";

const Home = () => {
  // const [userSelected, setUserSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLoadContent = () => {
    setLoading(false);
  };

  return (
    <section>
      {/* <Header
        username="Casimimmo"
        userSelected={userSelected}
        setUserSelected={setUserSelected}
      /> */}
      {/* <UserMiniModal userSelected={userSelected} /> */}
      {/* <Navbar /> */}
      {/* <h1>Home Page</h1> */}

      <Hero />
      <div className={styles.LoadersHome}>{loading && <Loader />}</div>
      <div
        className={`${styles.Home} section flex flex-column justify-content-center align-items-center`}
      >
        <MainContent onLoadContent={handleLoadContent} />
        {/* <Footer /> */}
      </div>
    </section>
  );
};

export default Home;
