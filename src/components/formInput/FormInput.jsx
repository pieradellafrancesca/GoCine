import styles from './index.module.scss';

export default function FormInput({ children, type, placeholder, value }) {
  return (
    <div className={styles.FormInput}>
      {children}
      {type === 'submit' ? (
        <input className={styles.subInput} type="submit" value={value} />
      ) : (
        <input className={styles.input} type={type} placeholder={placeholder} />
      )}
    </div>
  );
}