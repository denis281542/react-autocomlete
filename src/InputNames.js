import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames } from "./features/names/namesSlice"; 
import { selectAllNames } from "./features/names/namesSlice"; 

export const InputNames = () => {
    const dispatch = useDispatch()
    const names = useSelector(selectAllNames)
    const [name, setName] = useState('')

    names.filter(n => n.Name.toLowerCase().includes(name))



    const namesStatus = useSelector(state => state.names.status)

    useEffect(() => {
        if(namesStatus === 'idle') {
            dispatch(fetchNames())
        }
    }, [namesStatus, dispatch])
    
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