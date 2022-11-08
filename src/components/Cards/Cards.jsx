import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Card } from './Card/Card';
import s from './cards.module.css';
import './cards.css';

export const Cards = ({ postList, onClose }) => {
  if (!postList.length) {
    return <h2>Картинок нет</h2>;
  }

  return (
    <TransitionGroup
      className={s.cards}
    >
      {postList.map((el) => (
        <CSSTransition
          key={el.id}
          timeout={300}
          classNames="card"
        >
          <Card onRemove={onClose} onPost={el} />
        </CSSTransition>
      ))}
    </TransitionGroup>

  );
};
