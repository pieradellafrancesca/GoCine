import styles from './index.module.scss';
import { catData } from '../../utils/mock/mock';

export default function Categories() {
  return (
    <div className={styles.Categories}>
      {catData.map((category) => (
        <button className={styles.btn} key={category.id}>
          {category.name}
        </button>
      ))}
    </div>
  );
}
