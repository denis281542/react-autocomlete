import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames } from "./features/names/namesSlice"; 
import { selectAllNames } from "./features/names/namesSlice"; 

export const InputNames = () => {
    const dispatch = useDispatch()
    const names = useSelector(selectAllNames)
    const [name, setName] = useState('')
    const [namesFiltered, setNamesFiltered] = useState('')
let a,b
    if(names.filter(n => n.Name.toLowerCase().includes(name)).length < 500) {
        a = names.filter(n => n.Name.toLowerCase().includes(name))
        b = a.map(name => {
            return(
                <li 
                    className="autocomplete__item"
                    key={name.ID}
                    // onClick={() => {
                    //     setName(name.Name)
                    //     setFetchNames([])
                    // }}
                >{name.Name}</li>
            )
        })
    }

    console.log(b);

    const namesStatus = useSelector(state => state.names.status)

    useEffect(() => {
        if(namesStatus === 'idle') {
            dispatch(fetchNames())
        }
    }, [namesStatus, dispatch])
    
    
    return(
        <div className="city">
            {/* {subject || ''} */}
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
                {b}
            </ul>      
        </div>
    )
}