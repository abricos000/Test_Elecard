import React from 'react';
import s from './footer.module.css';

export const Footer = ({ children }) => (
  <footer className={s.footerContent}>
    {children}
  </footer>
);
