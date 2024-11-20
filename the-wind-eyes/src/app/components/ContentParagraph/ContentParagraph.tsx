import React from 'react';

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
  const paragraphStyle = {
    fontFamily: '"Raleway", sans-serif',
    color,
    fontSize,
  };

  return <p style={paragraphStyle}>{children}</p>;
};
