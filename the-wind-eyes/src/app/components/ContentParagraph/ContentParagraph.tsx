import React, { CSSProperties } from 'react';

interface ContentParagraphProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
}

export const ContentParagraph: React.FC<ContentParagraphProps> = ({
  children,
  color = 'black',
  fontSize = '1.5rem',
}) => {
  const paragraphStyle: CSSProperties = {
    fontFamily: '"Raleway", sans-serif',
    color,
    fontSize,
    textAlign: 'justify',
<<<<<<< HEAD
    padding: '0.5rem',
=======
    padding: '0.5rem'
>>>>>>> 2796b7abe4736e76b10b1ee12bc622250b204ad2
  };

  return <p style={paragraphStyle}>{children}</p>;
};
