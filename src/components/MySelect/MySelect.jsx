import React from "react";
import s from "./MySelect.module.css";

const MySelect = ({options, defaultValue, value, onChange}) => {

 

    return(
        <div>
                { options.map(option => 
                    <p key={option.value} ><input value={option.value} type="radio" name="sort" onClick={event => onChange(event.target.value)}/>
                        {option.name}
                    </p>)}
        </div>
    )
}

export default MySelect;