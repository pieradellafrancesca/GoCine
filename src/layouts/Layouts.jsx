import { Outlet } from "react-router-dom";

import Footer from "../components/footer";
import styles from "./index.module.scss";
import Header from "../components/header";

const Layouts = () => {
  return (
    <div className={styles.Layouts}>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layouts;
