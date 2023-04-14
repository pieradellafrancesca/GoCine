import { useContext } from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

import FormInput from '../formInput';
import styles from './index.module.scss';

import { AiOutlineMail, AiFillLock } from 'react-icons/ai';

export default function LoginForm() {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: 'SET_FORM_SWITCH', payload: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.LoginForm}>
      <span className={styles.backBtn}>
        <Link to="/">{'<'}</Link>
      </span>
      <h3 className={styles.title}>user account </h3>

      <form onClick={handleSubmit} className={`${styles.form} form`}>
        <FormInput type="email" placeholder="e-mail">
          <AiOutlineMail className={styles.icons} />
        </FormInput>
        <FormInput type="password" placeholder="password">
          <AiFillLock className={styles.icons} />
        </FormInput>
        <FormInput type="submit" value="Login" />
      </form>

      <p className={styles.text}>
        Don't have an account ? <span onClick={handleClick}>Sign up</span>
      </p>
    </div>
  );
}
