// components/Input/Input.js
import React from 'react';
import styles from './page.module.css';

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;
