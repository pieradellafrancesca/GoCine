import { useState } from "react";
import styles from "./index.module.scss";

export default function FormInput({
  children,
  type,
  option,
  placeholder,
  value,
  onChange,
}) {
  const [showPass, setShowPass] = useState(type);

  const onKeyPress = (e) => {
    if (type === "password") {
      if (e.key === "Shift") {
        setShowPass("text");
      }
    }
  };

  const onKeyOut = (e) => {
    if (type === "password") {
      if (e.key === "Shift") {
        setShowPass(type);
      }
    }
  };

  return (
    <div className={styles.FormInput}>
      {children}
      {type === "submit" ? (
        <input className={styles.subInput} type="submit" value={value} />
      ) : (
        <input
          className={styles.input}
          type={type === "password" ? showPass : type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyPress}
          onKeyUp={onKeyOut}
        />
      )}
      <span className="inputOpt">{option && option}</span>
    </div>
  );
}
