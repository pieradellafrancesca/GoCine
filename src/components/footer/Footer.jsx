import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

// const menuItems = [
//   {
//     label: "Home",
//     path: "/",
//     icon: <AiOutlineHome />,
//   },
//   {
//     label: "Buy Tickets",
//     path: "tickets",
//     icon: <BsTicketPerforated />,
//   },
//   {
//     label: "Profile",
//     path: "",
//     icon: <BsPerson />,
//   },
// ];
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.infoCenter}>
        <h4>Copyright</h4>
        <p>
          <AiOutlineCopyrightCircle />
          2023.All rights reserved.
        </p>
        <Link to="/">
          <img className={styles.logo} src="/logo.svg_3.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.infoSocial}>
        <h4>Social</h4>
        <ul className={styles.socialList}>
          <li className={styles.social}>
            <BsInstagram />
            <span>Instagram</span>
          </li>
          <li className={styles.social}>
            <BsFacebook />
            <span>Facebook</span>
          </li>
          <li className={styles.social}>
            <BsTiktok />
            <span>Tiktok</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
