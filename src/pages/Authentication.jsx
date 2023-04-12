import NavButton from '../components/navButton';
import styles from '../scss/pages/index.module.scss';

const Authentication = () => {
  return (
    <section className={`${styles.Authentication} section `}>
      <h2>Auth page</h2>
      <NavButton />
      <form className={styles.form}>
        <h3>login</h3>

        <div className={`${styles.form_row} flex flex-column`}>
          <label htmlFor="name" className={styles.form_label}>
            name
          </label>
          <input type="text" className={styles.form_input} id="name" />
        </div>

        <div className={`${styles.form_row} flex flex-column`}>
          <label htmlFor="email" className={styles.form_label}>
            e-mail
          </label>
          <input type="text" className={styles.form_input} id="email" />
          <input type="submit" value={'Login'} className={styles.form_btn} />
        </div>
      </form>

      <form className={styles.form}>
        <h3>sign up</h3>

        <div className={`${styles.form_row} flex flex-column `}>
          <label htmlFor="name" className={styles.form_label}>
            name
          </label>
          <input type="text" className={styles.form_input} id="name" />
        </div>

        <div className={`${styles.form_row} flex flex-column`}>
          <label htmlFor="email" className={styles.form_label}>
            e-mail
          </label>
          <input type="text" className={styles.form_input} id="email" />
          <input type="submit" value={'Sign Up'} className={styles.form_btn} />
        </div>
      </form>
    </section>
  );
};

export default Authentication;
