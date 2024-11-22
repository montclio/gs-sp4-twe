import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './page.module.css';

interface DeveloperCardProps {
  name: string;
  rm: string | number;
  imageSrc:  StaticImageData | string;
  linkedinUrl: string;
  gitUrl: string;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({
  name,
  rm,
  imageSrc,
  linkedinUrl,
  gitUrl,
}) => {
  return (
    <div className={styles.devStyled}>
      <Image src={imageSrc} alt={name} className={styles.imgDev} />
      <h2 className={styles.description}>{name}</h2>
      <h2 className={styles.description}>RM: {rm}</h2>
      <h2 className={styles.description}>
        <a
          className={styles.link}
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </h2>
      <h2 className={styles.description}>
        <a
          className={styles.link}
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </h2>
    </div>
  );
};
