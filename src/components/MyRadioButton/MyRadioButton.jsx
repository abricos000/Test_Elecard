/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import s from './myRadioButton.module.css';

const MyRadioButton = ({
  onSortData, onChange, setSortMethod, sortMethod,
}) => {
  const handleClickRadioButton = (value) => {
    onChange(value);
    setSortMethod(value);
  };

  return (
    <div className={s.radioBtns}>
      {onSortData.map((option) => (
        <p className={s.radioInput} key={option.value}>
          <label>
            <input
              value={option.value}
              type="radio"
              name="sort"
              checked={sortMethod === option.value}
              onChange={() => handleClickRadioButton(option.value)}
            />
            {' '}
            {option.name}
          </label>
        </p>
      ))}
    </div>
  );
};

export default MyRadioButton;
