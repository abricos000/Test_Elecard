import React from 'react';
import s from './pagination.module.css';

export const Pagination = ({ onPaginate, pageNumbers }) => (
  <div>
    <div className={s.list}>
      {pageNumbers.map((element) => (
        <span
          role="presentation"
          onClick={() => onPaginate(element.number)}
          key={element.number}
          className={element.status ? s.active : s.item}
        >
          {element.number}
        </span>
      ))}
    </div>
  </div>
);
