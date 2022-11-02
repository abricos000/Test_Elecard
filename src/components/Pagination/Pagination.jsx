import React from 'react';
import { MyButton } from '../MyButtons/MyButton';
import s from './pagination.module.css';

export function Pogination({
  onCurrentPost, onPostsPerPage, onTotalPosts, onPaginate, onPrefPage, onNextPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(onTotalPosts / onPostsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className={s.list}>
        {pageNumbers.map((number) => (
          <span
            role="presentation"
            onClick={() => (onPaginate(number))}
            key={number}
            className={s.item}
          >
            {number}
          </span>
        ))}
      </div>
      {((onCurrentPost.length))
        ? (
          <div className={s.btns}>
            <MyButton click={onPrefPage}>pref page</MyButton>
            <MyButton click={onNextPage}>next page</MyButton>
          </div>
        )
        : <div />}
    </div>
  );
}
