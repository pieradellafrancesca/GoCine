import styles from "./index.module.scss";

export default function FormInput({
  children,
  type,
  option,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={styles.FormInput}>
      {children}
      {type === "submit" ? (
        <input className={styles.subInput} type="submit" value={value} />
      ) : (
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
      <span className="inputOpt">{option && option}</span>
    </div>
  );
}
