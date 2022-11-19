import React from 'react';
import { BranchTheee } from './BranchThee/BranchThee';
import s from './TreeList.module.css';

export const TreeList = ({
  onAddTree, onImageModal, elementArray,
}) => (
  <div
    className={s.item}
  >
    <div
      value={elementArray.category}
      onClick={(e) => onAddTree(e.target.innerText)}
      className={`${s.list} ${s.category}`}
      role="presentation"
    >
      {elementArray.category}
    </div>
    <div className={s.list}>
      { elementArray.bool && elementArray.nested_values.map((elementCategories) => (
        <BranchTheee
          key={elementCategories.id}
          onImageModal={onImageModal}
          elementCategories={elementCategories}
        />
      ))}
    </div>
  </div>
);
