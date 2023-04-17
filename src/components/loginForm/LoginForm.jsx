import { useContext, useState } from "react";
import { Context } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

import FormInput from "../formInput";
import BacktoHomeBtn from "../backToHomeBtn";
import styles from "./index.module.scss";

import { AiOutlineMail, AiFillLock } from "react-icons/ai";

export default function LoginForm() {
  const { state, dispatch } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/preorder");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClick = () => {
    dispatch({ type: "SET_FORM_SWITCH", payload: true });
  };
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className={styles.LoginForm}>
      <BacktoHomeBtn endpoint="/" className={styles.backBtn} />
      <h3 className={styles.title}>user account </h3>

      <form onSubmit={handleSubmit} className={`${styles.form} form`}>
        <FormInput
          type="email"
          placeholder="e-mail"
          onChange={handleEmailChange}
        >
          <AiOutlineMail className={styles.icons} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        >
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
