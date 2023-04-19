import { useContext, useState, useEffect } from "react";
import { Context } from "../../context";

// Firebase
import { useUserAuth } from "../../context/UserAuthContext";
import { ref, set } from "firebase/database";
import { db, auth } from "../../../firebaseConfig";

// Components
import FormInput from "../formInput";
import BacktoHomeBtn from "../backToHomeBtn";
import styles from "./index.module.scss";

import {
  AiOutlineFileImage,
  AiOutlineUser,
  AiOutlineMail,
  AiFillLock,
} from "react-icons/ai";

export default function SignupForm() {
  // Context was used to set the forms swith value
  const { state, dispatch } = useContext(Context);
  //  useState manages the input values
  const [username, setUsername] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  //  Firebase signup function
  const { signup } = useUserAuth();

  // Auth & DB

  function writeUserData(userId, name, email, imageUrl = "") {
    // #1 Firebase real time db, obj model
    set(ref(db, "users/" + userId), {
      uid: userId,
      username: name,
      email: email,
      imageUrl: imageUrl,
      tickets: [
        { id: 121, title: "movie title", room: 2, seat: "4-b", time: "18:00" },
        { id: 212, title: "movie title", room: 3, seat: "10-f", time: "20:00" },
      ],
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // #2 Firebase sign up function
      await signup(email, password);
      // # Writes the signup user data on Firebase real time db
      writeUserData(auth.currentUser.uid, username, email, profileImg);
      dispatch({ type: "SET_FORM_SWITCH", payload: false });
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle events

  const handleClick = () => {
    dispatch({ type: "SET_FORM_SWITCH", payload: false });
  };
  const handleUser = (e) => setUsername(e.target.value);
  const handleImg = (e) => setProfileImg(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <div className={styles.SignupForm}>
      <BacktoHomeBtn endpoint="/" className={styles.backBtn} />
      <h3 className={styles.title}>create account</h3>

      <form onSubmit={handleSubmit} className={`${styles.form} form`}>
        <FormInput type="text" placeholder="username" onChange={handleUser}>
          <AiOutlineUser className={styles.icons} />
        </FormInput>

        <FormInput type="text" placeholder="image URL" onChange={handleImg}>
          <AiOutlineFileImage className={styles.icons} />
        </FormInput>

        <FormInput type="email" placeholder="e-mail" onChange={handleEmail}>
          <AiOutlineMail className={styles.icons} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="password"
          onChange={handlePassword}
        >
          <AiFillLock className={styles.icons} />
        </FormInput>

        <FormInput type="submit" value="Sign Up" />
      </form>

      <p className={styles.text}>
        Already have an account ? <span onClick={handleClick}>Login</span>
      </p>
    </div>
  );
}
