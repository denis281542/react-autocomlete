import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchHouses, clearHouses } from '../houses/housesSlice';
// import {  } from '../street/streetsSlice';

export const Input = ({htmlFor, label, id, type, placeholder, selectAll, fetch, fetchNext,  selectStatus}) => {
    const dispatch = useDispatch()
    const names = useSelector(selectAll)
    
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')

    const status = useSelector(selectStatus)

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetch())
        } 
    }, [status, dispatch])

    if(names.filter(n => n.name.toLowerCase().includes(name)).length < 500) {
        var namesFiltered = names.filter(n => n.name.toLowerCase().includes(name)).map(name => {
            return(
                <li 
                    className="autocomplete__item"
                    key={name.id}
                    onClick={() => {
                        setName(name.name)
                        setSubject(name.subject)
                        dispatch(fetchNext(name.id))
                        console.log(name.id);
                    }}
                >{name.name}<small>{name.subject}</small></li>
            )
        })
    }  

    return(
        <div className="city">
            {subject || ''}
            <label htmlFor={htmlFor}>{label}</label>
            <input 
                id={id} 
                type={type}
                placeholder={placeholder}
                onChange={e => {
                    setName(e.target.value)
                    if(e.target.value.length < name.length) dispatch(clearHouses())
                }}
                value={name}
                autoComplete="off"
            /> 
            <ul className="autocomplete__list">
                {namesFiltered}
            </ul>      
        </div>
    )
}