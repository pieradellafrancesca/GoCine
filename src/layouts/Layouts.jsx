import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "./index.module.scss";
import Header from "../components/header";
import UserMiniModal from "../components/userMiniModal";
import { useState } from "react";

const Layouts = () => {
  const [userSelected, setUserSelected] = useState(false);

  return (
    <div className={styles.Layouts}>
      {/* <Navbar /> */}
      <Header
        username="Casimimmo"
        userSelected={userSelected}
        setUserSelected={setUserSelected}
      />
      <UserMiniModal userSelected={userSelected} />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layouts;
