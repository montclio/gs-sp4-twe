// components/Button/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  backgroundColor?: string;
  borderColor?: string;
  style?: React.CSSProperties;
  width?: string; // Adicionando largura manual
  height?: string; // Adicionando altura manual
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
  width, // Recebe a largura
  height, // Recebe a altura
}) => {
  const getButtonStyle = () => {
    let baseStyle: React.CSSProperties = {
      padding: '10px 20px',
      borderRadius: '5px',
      border: '2px solid transparent',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      backgroundColor: backgroundColor || '#007bff',
      color,
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1rem',
      fontWeight: 'bold',
      width, // Aplica a largura personalizada
      height, // Aplica a altura personalizada
    };

    if (size === 'small') baseStyle.padding = '5px 10px';
    if (size === 'large') baseStyle.padding = '15px 30px';

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
      {label}
    </button>
  );
};
