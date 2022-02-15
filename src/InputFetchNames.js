import { useState, useEffect } from "react"

export const InputFetchNames = ({label, htmlFor, id, text, placeholder, filterName, value, onChange}) => {

   

    

    return(
    <div className="autocomplete__wrapper">
        <label htmlFor={htmlFor}>{label}</label>
        <input 
          id={id} 
          type={text}
          placeholder={placeholder} 
          onChange={onChange}
          value={value}
          autoComplete="off"
        /> 
        <ul className="autocomplete__list">
          {filterName}
        </ul>      
    </div>
    )
}