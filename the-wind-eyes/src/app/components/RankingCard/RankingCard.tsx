import React from 'react';
import styles from './page.module.css';

interface RankingCardProps {
  companie: string;
  percentual: string;
  scoreWidth: string; // Receberá o width para a barra de progresso
}

const RankingCard: React.FC<RankingCardProps> = ({ companie, percentual, scoreWidth }) => {
  return (
    <section className={styles.rankingSection}>
      <div className={styles.ranking}>
        <p className={styles.companie}>{companie}</p>

        <div className={styles.Score}>
          <div className={styles.scoreBar} style={{ width: scoreWidth }}></div>
        </div>
        <p className={styles.percentual}>{percentual}</p>
      </div>
    </section>
  );
};

export default RankingCard;
