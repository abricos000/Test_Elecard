import React from 'react';
import s from './BranchThee.module.css';

export const BranchTheee = ({ onImageModal, elementCategories }) => (
  <div
    className={`${s.item} ${s.hoverImg}`}
    value={elementCategories.name}
  >
    <span
      className={s.text}
    >
      {elementCategories.name}
    </span>
    <img
      role="presentation"
      className={s.spanImg}
      onClick={() => onImageModal(
        elementCategories.name,
        elementCategories.id,
      )}
      value={elementCategories.name}
      src={elementCategories.name}
      alt="изображение из категории, на которое надо нажать"
    />
  </div>

);
