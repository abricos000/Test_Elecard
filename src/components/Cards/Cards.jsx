import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Card } from './Card/Card';
import s from './Сards.module.css';
import './Сards.css';

export const Cards = ({ postList, onClose }) => (
  <TransitionGroup className={s.cards}>
    {postList.map((post) => (
      <CSSTransition
        key={post.id}
        timeout={300}
        classNames="card"
      >
        <Card onRemove={onClose} post={post} />
      </CSSTransition>
    ))}
  </TransitionGroup>

);
