import React from 'react';
import { BranchThee } from './BranchThee/BranchThee';
import s from './TreeList.module.css';

export const TreeList = ({ onAddTree, onClickImageModal, elementArray }) => (
  <div className={s.item}>
    <div
      onClick={() => onAddTree(elementArray.category)}
      className={`${s.list} ${s.category}`}
      role="presentation"
    >
      {elementArray.category}
    </div>
    <div className={s.list}>
      { elementArray.bool && elementArray.nestedValues.map((elementCategories) => (
        <BranchThee
          key={elementCategories.id}
          onClickImageModal={onClickImageModal}
          elementCategories={elementCategories}
        />
      ))}
    </div>
  </div>
);
