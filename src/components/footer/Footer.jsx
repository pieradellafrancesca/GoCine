import styles from "./index.module.scss";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <h3>Movie Go</h3>
      </div>
      <div className={styles.subscribe}>
        <p>connect</p>
        <p>sign-up newsletter</p>
        <input type="text" placeholder="Email Address" />
        <button>subscribe</button>
        <div className={styles.icons}>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
      <div className={styles.movies}>
        <p>movies</p>
        <p>all movies</p>
        <p>featured</p>
        <p>rating</p>
      </div>
      <div className={styles.location}>
        <p>location</p>
        <p>all location</p>
        <p>tampa</p>
        <p>orlando</p>
      </div>
      <div className={styles.company}>
        <p>company</p>
        <p>about</p>
        <p>contact</p>
        <p>menu</p>
        <p>term & condition</p>
      </div>
    </div>
  );
};
export default Footer;
