import React, { useState } from 'react';
import { MyButton } from '../../MyButtons/MyButton';
import MyRadioButton from '../../MyRadioButton/MyRadioButton';
import s from './sortCardsPage.module.css';

export const SortCardsPage = ({
  onAddAllCards, onShowDeletedCards, removeShowDeletedCards, onSortPost, quantityPosts,
}) => {
  const [sortMethod, setSortMethod] = useState('category');
  return (
    <div className={s.conteiner}>
      <MyRadioButton
        onChange={onSortPost}
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
        onSortData={[
          { value: 'filesize', name: 'Размеру файла' },
          { value: 'timestamp', name: 'Дате' },
          { value: 'category', name: 'Категории' },
        ]}
      />
      <div className={s.buttons}>
        <MyButton click={onAddAllCards}>добавить все карточки</MyButton>
        <MyButton click={onShowDeletedCards}>Корзина</MyButton>
        <MyButton click={removeShowDeletedCards}>Очистить корзину</MyButton>
      </div>
      <span className={s.quantity}>
        кол-во изображений:
        <span style={{ color: '#333' }}>{quantityPosts}</span>
      </span>
    </div>
  );
};
