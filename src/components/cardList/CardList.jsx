import Card from '../card';
import styles from './index.module.scss';

export default function CardList({ children, data }) {
  return (
    <>
      {children}
      <div className={`${styles.CardList}`}>
        {data.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </>
  );
}
