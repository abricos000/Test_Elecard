/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import s from './myRadioButton.module.css';

function MyRadioButton({ onSortData, onChange }) {
  return (
    <div>
      { onSortData.map((option) => (
        <p className={s.radioInput} key={option.value}>
          <label>
            <input
              value={option.value}
              type="radio"
              name="sort"
              onClick={(event) => onChange(event.target.value)}
            />
            {option.name}
          </label>
        </p>
      ))}
    </div>
  );
}

export default MyRadioButton;
