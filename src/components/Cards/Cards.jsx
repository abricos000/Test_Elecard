import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Card } from './Card/Card';
import s from './Сards.module.css';
import './Сards.css';

export const Cards = ({ postList, onClose }) => (
  <TransitionGroup
    className={s.cards}
  >
    {postList.map((el) => (
      <CSSTransition
        key={el.id}
        timeout={300}
        classNames="card"
      >
        <Card onRemove={onClose} post={el} />
      </CSSTransition>
    ))}
  </TransitionGroup>

);
