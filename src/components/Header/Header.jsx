import React from 'react';
import { RenderMethod } from '../../constants/render-method';
import s from './header.module.css';

export const Header = ({ onChangeRenderMethod, renderMethod }) => {
  const valuePage = 'valuePage';
  return (
    <header className={s.header}>
      <p className={s.p}>
        <label className={s.label}>
          <input
            checked={renderMethod === RenderMethod.cards}
            type="radio"
            name={valuePage}
            onChange={onChangeRenderMethod}
            value={RenderMethod.cards}
          />
          карточки
        </label>
      </p>
      <p className={s.p}>
        <label className={s.label}>
          <input
            checked={renderMethod === RenderMethod.tree}
            type="radio"
            name={valuePage}
            onChange={onChangeRenderMethod}
            value={RenderMethod.tree}
          />
          древовидный список
        </label>
      </p>
    </header>
  );
};
