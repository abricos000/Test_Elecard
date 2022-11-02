import React from 'react';
import { MathDataMethod } from '../../../constants/math-method';
import s from './card.module.css';

export function Card({ onPost, onRemove }) {
  const data = new Date(onPost.timestamp).toLocaleDateString('en-US');
  const KiloB = Math.ceil(onPost.filesize / MathDataMethod.bInKb);
  const B = onPost.filesize % MathDataMethod.bInKb;
  const imageUrl = `http://contest.elecard.ru/frontend_data/${onPost.image}`;

  return (
    <div className={s.card}>
      <button type="button" className={s.btn} onClick={() => onRemove(onPost)}>&times;</button>
      <img className={s.image} src={imageUrl} alt="изображение не прогрузилась" />
      <p className={s.text}>
        {' '}
        <b>категория:</b>
        {' '}
        {onPost.category}
        {' '}
        <b>размер файла:</b>
        {' '}
        {KiloB}
        Кб
        {' '}
        {B}
        байт
        {' '}
        <b>месяц/число/год: </b>
        {' '}
        {data}
        {' '}
      </p>
    </div>
  );
}
