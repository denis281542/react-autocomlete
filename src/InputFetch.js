export const InputFetch = ({label, htmlFor, id, text, placeholder, filteredList, value, onChange, subject}) => {

    return(
        <div className="city">
            {subject || ''}
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