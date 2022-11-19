import React from 'react';
import s from './Footer.module.css';

export const Footer = ({ children }) => (
  <footer className={s.footerContent}>
    {children}
  </footer>
);
