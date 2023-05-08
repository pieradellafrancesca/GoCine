import { Outlet } from "react-router-dom";

import Footer from "../components/footer";
import Header from "../components/header";

const Layouts = () => {
  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layouts;
