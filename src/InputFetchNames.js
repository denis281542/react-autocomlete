export const InputFetchNames = ({label, htmlFor, id, text, placeholder, filteredList, value, onChange}) => {

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
                {filteredList}
            </ul>      
        </div>
    )
}