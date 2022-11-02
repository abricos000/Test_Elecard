/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { RenderMethod } from '../../constants/render-method';
import s from './header.module.css';

export function Header({ onChangeRenderMethod }) {
  return (
    <header className={s.header}>
      <p className={s.p}>
        <label>
          <input
            type="radio"
            name="prim"
            onClick={onChangeRenderMethod}
            value={RenderMethod.cards}
          />
          карточки
        </label>
      </p>
      {/* TODO Сделать такое же с этим инпутом */}
      <p className={s.p}>
        <label>
          <input
            type="radio"
            name="prim"
            onClick={onChangeRenderMethod}
            value={RenderMethod.tree}
          />
          древовидный список
        </label>
      </p>
    </header>
  );
}
