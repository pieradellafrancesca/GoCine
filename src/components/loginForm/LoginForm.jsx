import { useContext, useState } from "react";
import { Context } from "../../context";
import { Link, useNavigate } from "react-router-dom";

// Firebase
import { useUserAuth } from "../../context/UserAuthContext";

// Components
import FormInput from "../formInput";
import BacktoHomeBtn from "../backToHomeBtn";
import styles from "./index.module.scss";

import { AiOutlineMail, AiFillLock } from "react-icons/ai";

export default function LoginForm() {
  //  Context was used to set the forms swith value
  const { state, dispatch } = useContext(Context);
  //  useState manages the input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // Firebase login function
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // #1 Firebase login function
      await login(email, password);
      navigate("/");

      // #2 Set in the localstorage the current user is logged state
      window.localStorage.setItem("isLogged", JSON.stringify(true));
    } catch (error) {
      setError(error.message);
      console.warn(error);
    }
  };

  // #3 Form switch context
  const handleClick = () => {
    dispatch({ type: "SET_FORM_SWITCH", payload: true });
  };
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className={styles.LoginForm}>
      <BacktoHomeBtn endpoint="/" className={styles.backBtn} />
      <h3 className={styles.title}>user account </h3>
      <p className="subtitle">Checkout your tickets</p>
      <p className="errorMsg">
        {error && "Error, incorrect e-mail or password"}
      </p>
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
          placeholder="password - SHIFT to Show"
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
