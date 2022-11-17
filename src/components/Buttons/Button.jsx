import React from 'react';
import s from './Button.module.css';

export const Button = ({ children, onClick }) => (
  <button
    disabled={false}
    type="button"
    onClick={onClick}
    className={s.btn}
  >
    {children}
  </button>
);
