import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { clearUsers, fetchUsers } from '../users/userSlice';

export const Input = ({htmlFor, label, id, type, placeholder, selectAll, fetch, fetchNext, clearHouse, clearFlat, selectStatus, getAddressId, address}) => {
=======
<<<<<<< HEAD
import { getAddress } from '../address/addressSlice';


export const Input = ({htmlFor, label, id, type, placeholder, selectAll, fetch, fetchNext, clearHouse, clearFlat, selectStatus, getAddressId}) => {
=======
// import {  } from '../street/streetsSlice';

export const Input = ({htmlFor, label, id, type, placeholder, selectAll, fetch, fetchNext, clearHouse, clearFlat, selectStatus}) => {
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
>>>>>>> main
    const dispatch = useDispatch()
    const names = useSelector(selectAll)
    const [name, setName] = useState('')
    const [active, setActive] = useState(false)
<<<<<<< HEAD
=======
    // const [subject, setSubject] = useState('')
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43

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
<<<<<<< HEAD
                        dispatch(fetchNext(name.id))
<<<<<<< HEAD
                        dispatch(address(name.name))
                        if(getAddressId) {
                            dispatch(clearUsers())
                            dispatch(getAddressId(name.id))
                            dispatch(fetchUsers(name.id))
                        }
=======
                        if(getAddressId) dispatch(getAddressId(name.id));
=======
                        // setSubject(name.subject)
                        if(fetchNext) dispatch(fetchNext(name.id))
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
>>>>>>> main
                    }}
                >{name.name}</li>
            )
        })
    }

<<<<<<< HEAD
    const clearInput = (e) => {
=======
    const clearNextInput = (e) => {
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
        if(e.target.value.length < name.length) {
            if(clearHouse) dispatch(clearHouse())
            if(clearFlat) dispatch(clearFlat())
        }
    }
    
    const onChange = e => {
<<<<<<< HEAD
        clearInput(e)
=======
        clearNextInput(e)
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
        setName(e.target.value)
    }

    return(
        <div className="city">
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
<<<<<<< HEAD
            <ul className={active ? "autocomplete__list" : "hide"}>
                {namesFiltered}
<<<<<<< HEAD
            </ul>       
=======
            </ul>      
=======

            {/* <div className={active ? "wrapper" : ""}> */}
                <ul className={active ? "autocomplete__list" : "hide"}>
                    {namesFiltered}
                </ul>      
            {/* </div>       */}
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
>>>>>>> main
        </div>
    )
}