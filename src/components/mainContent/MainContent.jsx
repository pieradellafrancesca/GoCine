import styles from './index.module.scss';
import { data, popularData } from '../../utils/mock/mock';
import CardList from '../cardList';
import Categories from '../categories';

export default function MainContent() {
  return (
    <div className={styles.MainContent}>
      <Categories />
      <CardList data={data}>
        <h2 className={styles.catTitle}>now playing</h2>
      </CardList>
      <CardList data={popularData}>
        <h2 className={styles.catTitle}>popular</h2>
      </CardList>
    </div>
  );
}
