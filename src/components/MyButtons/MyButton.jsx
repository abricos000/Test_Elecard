import React from 'react';
import s from './myButton.module.css';

export function MyButton({ children, click }) {
  return (
    <button type="button" onClick={click} className={s.btn}>
      {children}
    </button>
  );
}
