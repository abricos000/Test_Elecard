import React from 'react';
import s from './treeList.module.css';

export const TreeList = ({
  arrayTree, onAddTree, flagTree, onImageModal,
}) => (
  <>
    { arrayTree.map((elementArray) => (
      (flagTree
          && (
            <div
              key={elementArray.id}
              role="presentation"
              className={s.item}
              onClick={(e) => onAddTree(e.target.innerText)}
            >
              <div className={`${s.list} ${s.category}`}>{elementArray.category}</div>
              <div className={s.list}>
                {elementArray.nested_values.map((elementCategories) => (
                  <>
                    {' '}
                    {elementCategories.bool && (
                      <div
                        key={elementCategories.id}
                        className={`${s.item} ${s.hoverImg}`}
                        value={elementCategories.name}
                      >
                        <span className={s.text}>{elementCategories.name}</span>
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
                    )}
                  </>
                ))}
              </div>
            </div>
          )
      )
    ))}
  </>
);
