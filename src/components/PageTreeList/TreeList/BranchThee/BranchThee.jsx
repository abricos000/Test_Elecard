import React from 'react';
import { dataHost } from '../../../../constants/host';
import s from './BranchThee.module.css';

export const BranchTheee = ({ onImageModal, elementCategories }) => (
  <div
    className={`${s.item} ${s.hoverImg}`}
    value={elementCategories.image}
  >
    <span
      className={s.text}
    >
      {`${dataHost}${elementCategories.image}`}
    </span>
    <img
      role="presentation"
      className={s.spanImg}
      onClick={() => onImageModal(
        elementCategories.image,
        elementCategories.id,
      )}
      value={elementCategories.image}
      src={`${dataHost}${elementCategories.image}`}
      alt="изображение из категории, на которое надо нажать"
    />
  </div>

);
