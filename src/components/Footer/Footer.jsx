import React from 'react';
import s from './footer.module.css';

export function Footer({ children }) {
  return (
    <footer className={s.footerContent}>
      {children}
    </footer>
  );
}
