import React from 'react';
import s from './Header.module.css';
import { renderMethodPage } from '../../constants/render-method';

const valuePage = 'valuePage';

export const Header = ({ onChangeRenderMethod, renderMethod }) => (
  <header className={s.header}>
    <p className={s.wrapper}>
      <label className={s.label}>
        <input
          checked={renderMethod === renderMethodPage.cards}
          type="radio"
          name={valuePage}
          onChange={() => onChangeRenderMethod(renderMethodPage.cards)}
        />
        карточки
      </label>
    </p>
    <p className={s.wrapper}>
      <label className={s.label}>
        <input
          checked={renderMethod === renderMethodPage.tree}
          type="radio"
          name={valuePage}
          onChange={() => onChangeRenderMethod(renderMethodPage.tree)}
        />
        древовидный список
      </label>
    </p>
  </header>
);
