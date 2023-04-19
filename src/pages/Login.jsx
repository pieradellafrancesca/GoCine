import { useContext } from "react";
import { Context } from "../context";

import LoginForm from "../components/loginForm";
import SignupForm from "../components/signupForm";
import styles from "../scss/pages/auth.module.scss";

export default function Login() {
  const { state, dispatch } = useContext(Context);

  return (
    <section className={`${styles.Login}  `}>
      {state.formSwitch ? <SignupForm /> : <LoginForm />}
    </section>
  );
}
