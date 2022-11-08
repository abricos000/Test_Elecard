import React from 'react';
import s from './myModal.module.css';

export const MyModal = ({
  children, onClose,
}) => (
  <div role="presentation" onClick={() => onClose()} className={[s.modal, s.active].join(' ')}>
    <div role="presentation" className={s.modalContent} onClick={(e) => e.stopPropagation()}>
      {children}
      <button type="button" className={s.btn} onClick={() => onClose()}>
        &times;
      </button>
    </div>
  </div>
);
