import { useContext } from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

import FormInput from '../formInput';
import styles from './index.module.scss';

import { AiOutlineUser, AiOutlineMail, AiFillLock } from 'react-icons/ai';

export default function SignupForm() {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: 'SET_FORM_SWITCH', payload: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.SignupForm}>
      <span className={styles.backBtn}>
        <Link to="/">{'<'}</Link>
      </span>

      <h3 className={styles.title}>create account</h3>

      <form onClick={handleSubmit} className={`${styles.form} form`}>
        <FormInput type="text" placeholder="username">
          <AiOutlineUser className={styles.icons} />
        </FormInput>
        <FormInput type="email" placeholder="e-mail">
          <AiOutlineMail className={styles.icons} />
        </FormInput>
        <FormInput type="password" placeholder="password">
          <AiFillLock className={styles.icons} />
        </FormInput>
        <FormInput type="password" placeholder="confirm password">
          <AiFillLock className={styles.icons} />
        </FormInput>
        <FormInput type="submit" value="Sign Up" />
      </form>

      <div className="textWrapper">
        <p className={styles.text}>
          Already have an account ? <span onClick={handleClick}>Login</span>
        </p>
        <p className={styles.text}>
          {' '}
          <input className={styles.checkbox} type="checkbox" />
          Terms and Conditions
        </p>
      </div>
    </div>
  );
}
