// components/Input/Input.tsx
import React from 'react';
import styles from './page.module.css';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      value={value}           // Vincula o valor ao estado do componente pai
      onChange={onChange}     // Atualiza o valor no estado do componente pai
    />
  );
};

export default Input;
