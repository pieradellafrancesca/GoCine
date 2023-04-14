import { useContext } from 'react';
import { Context } from '../context';

import NavButton from '../components/navButton';
import LoginForm from '../components/loginForm';
import SignupForm from '../components/signupForm';
import styles from '../scss/pages/auth.module.scss';

export default function Auth() {
  const { state, dispatch } = useContext(Context);

  return (
    <section className={`${styles.Auth}  `}>
      {state.formSwitch ? <SignupForm /> : <LoginForm />}
    </section>
  );
}
