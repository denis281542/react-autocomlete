import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
// import {  } from '../street/streetsSlice';

export const Input = ({htmlFor, label, id, type, placeholder, selectAll, fetch, fetchNext, clearHouse, clearFlat, selectStatus}) => {
    const dispatch = useDispatch()
    const names = useSelector(selectAll)
    const [name, setName] = useState('')
    const [active, setActive] = useState(false)
    // const [subject, setSubject] = useState('')

    const status = useSelector(selectStatus)   
    
    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetch())
        } 
    }, [status, dispatch])
    
    useEffect(() => {
        if(status === 'clear' && names.length === 0) {
            setName('')
        } 
    }, [names.length])

    if(names.filter(n => n.name.toLowerCase().includes(name)).length < 500) {
        var namesFiltered = names.filter(n => n.name.toLowerCase().includes(name)).map(name => {
            return(
                <li 
                    className="autocomplete__item"
                    key={name.id}
                    onClick={() => {
                        setName(name.name)
                        setActive(false)
                        // setSubject(name.subject)
                        if(fetchNext) dispatch(fetchNext(name.id))
                    }}
                >{name.name}</li>
            )
        })
    }

    const clearInput = (e) => {
        if(e.target.value.length < name.length) {
            if(clearHouse) dispatch(clearHouse())
            if(clearFlat) dispatch(clearFlat())
        }
    }
    
    const onChange = e => {
        clearInput(e)
        setName(e.target.value)
    }

    return(
        <div className="city">
            {/* {subject || ''} */}
            <label htmlFor={htmlFor}>{label}</label>
            <input 
                id={id} 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={name}
                autoComplete="off"
                onFocus={() => setActive(true)}
            /> 
            <ul className={active ? "autocomplete__list" : "hide"}>
                {namesFiltered}
            </ul>      
        </div>
    )
}