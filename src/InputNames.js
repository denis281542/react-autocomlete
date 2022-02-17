import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames, selectAllNames } from "./features/names/namesSlice"; 

export const InputNames = () => {
    const dispatch = useDispatch()
    const names = useSelector(selectAllNames)
    const [name, setName] = useState('')

    const namesStatus = useSelector(state => state.names.status)

    useEffect(() => {
        if(namesStatus === 'idle') {
            dispatch(fetchNames())
        }
    }, [namesStatus, dispatch])
  

    if(names.filter(n => n.name.toLowerCase().includes(name)).length < 500) {
        var namesFiltered = names.filter(n => n.name.toLowerCase().includes(name)).map(name => {
            return(
                <li 
                    className="autocomplete__item"
                    key={name.id}
                    onClick={() => {
                        setName(name.name)
                    }}
                >{name.name}</li>
            )
        })
    }    
    
    return(
        <div className="city">
            <label htmlFor='name'>Имя</label>
            <input 
            id='name' 
            type='text'
            placeholder='Введите имя'
            onChange={e => setName(e.target.value)}
            value={name}
            autoComplete="off"
            /> 
            <ul className="autocomplete__list">
                {namesFiltered}
            </ul>      
        </div>
    )
}