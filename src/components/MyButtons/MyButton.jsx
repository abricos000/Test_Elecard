import React from 'react';
import s from './myButton.module.css';

export const MyButton = ({ children, click }) => (
  <button type="button" onClick={click} className={s.btn}>
    {children}
  </button>
);
