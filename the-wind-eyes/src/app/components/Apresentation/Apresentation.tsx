import React from 'react';
import styles from './page.module.css';

interface ApresentationProps {
  color?: string; 
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'; 
  borderRadius?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
  }; 
  children: React.ReactNode;
}

export const Apresentation: React.FC<ApresentationProps> = ({
  color = '#43CE41',
  alignSelf = 'flex-start',
  borderRadius = {},
  children,
}) => {
  const {
    topLeft = '0',
    topRight = '0',
    bottomLeft = '0',
    bottomRight = '0',
  } = borderRadius;

  return (
    <section
      className={styles.apresentation}
      style={{
        backgroundColor: color,
        alignSelf: alignSelf,
        borderTopLeftRadius: topLeft,
        borderTopRightRadius: topRight,
        borderBottomLeftRadius: bottomLeft,
        borderBottomRightRadius: bottomRight,
      }} // Define as bordas de forma personalizada a partir das props
    >
      {children}
    </section>
  );
};
