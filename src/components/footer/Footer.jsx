import { AiOutlineHome } from "react-icons/ai";
import { BsTicketPerforated, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const menuItems = [
  {
    label: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    label: "Buy Tickets",
    path: "tickets",
    icon: <BsTicketPerforated />,
  },
  {
    label: "Profile",
    path: "",
    icon: <BsPerson />,
  },
];
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <ul className={styles.footerList}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link className={styles.listItem} to={item.path}>
              {item.icon}
              <p className={styles.iconsText}> {item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
