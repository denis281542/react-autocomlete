import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

export const Input = ({htmlFor, label, id, type, placeholder, selectAll, fetch}) => {
    const dispatch = useDispatch()
    const names = useSelector(selectAll)
    const [name, setName] = useState('')

    const namesStatus = useSelector(state => state.names.status)

    
    useEffect(() => {
        if(namesStatus === 'idle') {
            dispatch(fetch())
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
            <label htmlFor={htmlFor}>{label}</label>
            <input 
            id={id} 
            type={type}
            placeholder={placeholder}
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