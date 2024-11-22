// components/Button/Button.tsx
import React from 'react';




interface ButtonProps {
  label?: string;   // Torne a label opcional, pois ela será substituída por children
  onClick?: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  backgroundColor?: string;
  borderColor?: string;
  style?: React.CSSProperties;
<<<<<<< HEAD
  width?: string;
  height?: string;
  children?: React.ReactNode;  // Adicionando children
=======
  width?: string; 
  height?: string; 
>>>>>>> 2796b7abe4736e76b10b1ee12bc622250b204ad2
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = '#fff',
  size = 'medium',
  variant = 'primary',
  backgroundColor,
  borderColor,
  style,
<<<<<<< HEAD
  width,
  height,
  children, // Recebe o conteúdo de children
=======
  width, 
  height, 
>>>>>>> 2796b7abe4736e76b10b1ee12bc622250b204ad2
}) => {
  const getButtonStyle = () => {
    let baseStyle: React.CSSProperties = {
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      border: '2px solid transparent',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      backgroundColor: backgroundColor || '#007bff',
      color,
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1rem',
      fontWeight: 'bold',
<<<<<<< HEAD
      width,
      height,
=======
      width, 
      height, 
>>>>>>> 2796b7abe4736e76b10b1ee12bc622250b204ad2
    };

    if (size === 'small') baseStyle.padding = '0.5rem 0.6rem';
    if (size === 'large') baseStyle.padding = '1rem 2rem';

    if (variant === 'outline') {
      baseStyle = {
        ...baseStyle,
        backgroundColor: 'transparent',
        border: `2px solid ${borderColor || color}`,
        color: borderColor || color,
      };
    }

    return { ...baseStyle, ...style };
  };

  return (
    <button onClick={onClick} style={getButtonStyle()}>
      {children || label} {/* Exibe 'children' ou 'label', se presente */}
    </button>
  );
};
