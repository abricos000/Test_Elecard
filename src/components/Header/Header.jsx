/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { RenderMethod } from '../../constants/render-method';
import s from './header.module.css';

export const Header = ({ onChangeRenderMethod, renderMethod }) => (
  <header className={s.header}>
    <p className={s.p}>
      <label>
        <input
          checked={renderMethod === RenderMethod.cards}
          type="radio"
          name="prim"
          onChange={onChangeRenderMethod}
          value={RenderMethod.cards}
        />
        карточки
      </label>
    </p>
    <p className={s.p}>
      <label>
        <input
          checked={renderMethod === RenderMethod.tree}
          type="radio"
          name="prim"
          onChange={onChangeRenderMethod}
          value={RenderMethod.tree}
        />
        древовидный список
      </label>
    </p>
  </header>
);
