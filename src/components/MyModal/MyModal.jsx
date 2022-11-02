import React from 'react';
import s from './myModal.module.css';

export function MyModal({ children, remove }) {
  return (
    <div role="presentation" onClick={() => remove()} className={[s.modal, s.active].join(' ')}>
      <div role="presentation" className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={s.btn} onClick={() => remove()}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
