import React from 'react';
import styles from './page.module.css';

interface SustainableEnergySectionProps {
  title: string;
  subTitle: string;
  content: string;
}

export const SustainableEnergySection: React.FC<SustainableEnergySectionProps> = ({ title, subTitle, content }) => {
  return (
    <section className={styles.sectionContent}>
      <h1 className={styles.tittle}>{title}</h1>
      <div className={styles.divContent}>
        <h2 className={styles.subTitle}>{subTitle}</h2>
        <p className={styles.span}>{content}</p>
      </div>
    </section>
  );
};
