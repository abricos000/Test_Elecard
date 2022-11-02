import React from 'react';
import { MyButton } from '../../MyButtons/MyButton';
import MyRadioButton from '../../MyRadioButton/MyRadioButton';
import s from './sortCardsPage.module.css';

export function SortCardsPage({
  onAddAllCards, onShowDeletedCards, onRemoveShowDeletedCards, onSortPost,
}) {
  return (
    <div className={s.conteiner}>
      <MyRadioButton
        onChange={onSortPost}
        onSortData={[
          { value: 'filesize', name: 'Размеру файла' },
          { value: 'timestamp', name: 'Дате' },
          { value: 'category', name: 'Категории' },
        ]}
      />
      <div className={s.buttons}>
        <MyButton click={onAddAllCards}>добавить все карточки</MyButton>
        <MyButton click={onShowDeletedCards}>Корзина</MyButton>
        <MyButton click={onRemoveShowDeletedCards}>Очистить корзину</MyButton>
      </div>
    </div>
  );
}
