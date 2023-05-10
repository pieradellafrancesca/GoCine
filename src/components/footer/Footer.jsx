import styles from "./index.module.scss";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  const menuItems = ["login", "about", "contact", "terms & conditions"];
  const icons = [AiFillLinkedin, AiFillFacebook, AiFillGithub];

  return (
    <div className={styles.Footer}>
      <div className={styles.logoWrapper}>
        <h1 className={styles.logo}>
          <span className={styles.flip}>Go</span>
          <span className={styles.text}>Cine</span>
        </h1>
      </div>

      <div className={styles.navFooter}>
        <ul className={styles.icons}>
          {icons.map((Item, i) => {
            return (
              <li key={i}>
                <Item />
              </li>
            );
          })}
        </ul>
        <ul className={styles.navList}>
          {menuItems.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>

      <div className={styles.subs}>
        <label htmlFor="email" className={styles.label}>
          newsletter :
        </label>
        <div className={styles.newsLetter}>
          <input type="text" placeholder="E-mail" id="email" />
          <button>sign up</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
