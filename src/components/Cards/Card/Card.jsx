import React from 'react';
import { MathDateMethod } from '../../../constants/math-method';
import { dataHost } from '../../../constants/host';
import s from './Сard.module.css';

export const Card = ({ post, onRemove }) => (
  <div className={s.card}>
    <img
      loading="lazy"
      className={s.image}
      src={`${dataHost}/${post.image}`}
      alt="изображение из категории"
    />
    <div className={s.textWrapper}>
      <div className={s.text}>

        <button
          type="button"
          className={s.btn}
          onClick={() => onRemove(post)}
        >
          &times;
        </button>

        <span>
          <b>категория</b>
          {' '}
          {post.category}
        </span>

        <span>
          <b>размер файла</b>
          {' '}
          {Math.ceil(post.filesize / MathDateMethod.BInKb)}
          Кб
          {' '}
          {post.filesize % MathDateMethod.BInKb}
          байт
        </span>

        <span>
          <b>месяц/число/год</b>
          {' '}
          {new Date(post.timestamp).toLocaleDateString('en-US')}
        </span>
      </div>
    </div>
  </div>
);
