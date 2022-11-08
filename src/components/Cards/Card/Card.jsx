import React from 'react';
import { MathDataMethod } from '../../../constants/math-method';
import s from './card.module.css';

export const Card = ({ onPost, onRemove }) => {
  const data = new Date(onPost.timestamp).toLocaleDateString('en-US');
  const KiloB = Math.ceil(onPost.filesize / MathDataMethod.bInKb);
  const B = onPost.filesize % MathDataMethod.bInKb;
  const imageUrl = `http://contest.elecard.ru/frontend_data/${onPost.image}`;

  return (
    <div className={s.card}>

      {/* почитать про loading и другие методы оптимизации загрузки картинок */}

      <img loading="lazy" className={s.image} src={imageUrl} alt="изображение не прогрузилась" />
      <div className={s.textWrapper}>
        <div className={s.text}>
          <button type="button" className={s.btn} onClick={() => onRemove(onPost)}>&times;</button>
          <span>
            <b>категория</b>
            {' '}
            {onPost.category}

          </span>
          <span>
            <b>размер файла</b>
            {' '}
            {KiloB}
            Кб
            {' '}
            {B}
            байт

          </span>
          {/* {' '} */}
          <span>
            <b>месяц/число/год</b>
            {' '}
            {data}
          </span>
        </div>
      </div>
    </div>
  );
};
