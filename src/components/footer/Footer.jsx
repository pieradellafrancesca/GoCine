import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";
// import { Link } from "react-router-dom";
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
      {/* <ul className={styles.footerList}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link className={styles.listItem} to={item.path}>
              {item.icon}
              <p className={styles.iconsText}> {item.label}</p>
            </Link>
          </li>
        ))}
      </ul> */}
      {/* <div className={styles.infoFooter}>
        <h4>Developers</h4>
        <ul>
          <li>
            <p>Andrea</p>
          </li>
          <li>
            <p>Claudio</p>
          </li>
          <li>
            <p>Ettore</p>
          </li>
          <li>
            <p>Filippo</p>
          </li>
          <li>
            <p>Francesca</p>
          </li>
          <li>
            <p>Zakaria</p>
          </li>
        </ul>
      </div> */}
      <div className={styles.infoCenter}>
        <h4>Copyright</h4>
        <p>
          <AiOutlineCopyrightCircle />
          2023.All rights reserved.
        </p>
        <img className={styles.logo} src="/Logo.png" alt="logo" />
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
      {/* <ul className={styles.nameSviluppatori}>
        <li>
          <img src="https://robohash.org/Andrea" alt="foto" />
          <p>Andrea</p>
        </li>
        <li>
          <img src="https://robohash.org/Claudio" alt="foto" />
          <p>Claudio</p>
        </li>
        <li>
          <img src="https://robohash.org/Ettore" alt="foto" />
          <p>Ettore</p>
        </li>
        <li>
          <img src="https://robohash.org/Filippo" alt="foto" />
          <p>Filippo</p>
        </li>
        <li>
          <img src="https://robohash.org/Francesca" alt="foto" />
          <p>Francesca</p>
        </li>
        <li>
          <img src="https://robohash.org/Zakaria" alt="foto" />
          <p>Zakaria</p>
        </li>
      </ul> */}
    </div>
  );
};
export default Footer;
