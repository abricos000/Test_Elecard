import React from "react";
import s from "./MyRadioButton.module.css";

const MyRadioButton = ({options, defaultValue, value, onChange}) => {
    return(
        <div>
            { options.map(option => 
                <p className={s.radio__input} key={option.value} >
                    <input value={option.value} type="radio" name="sort" onClick={event => onChange(event.target.value)}/>
                    {option.name}
                </p>)}
        </div>
    )
}

export default MyRadioButton;