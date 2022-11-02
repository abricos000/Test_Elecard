import React from 'react';
import s from './myModal.module.css';

export function MyModal({ children, onRemove }) {
  return (
    <div role="presentation" onClick={() => onRemove()} className={[s.modal, s.active].join(' ')}>
      <div role="presentation" className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={s.btn} onClick={() => onRemove()}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
