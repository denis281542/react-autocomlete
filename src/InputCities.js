import { useSelector, useDispatch } from 'react-redux';
import {fetchCities, selectAllCities} from './features/cities/citiesSlice'
import {useState, useEffect} from 'react'


export const InputCities = () => {
    const dispatch = useDispatch()
    const cities = useSelector(selectAllCities)
    const [subject, setSubject] = useState('')
    const [city, setCity] = useState('')

    const userStatus = useSelector(state => state.cities.status)

    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(fetchCities())
        }
    }, [userStatus, dispatch])

    const filterCity = cities.filter(c => c.name.toLowerCase().includes(city)).map(i => {
        return(
          <li 
            className="autocomplete__item"
            key={i.coords.lat + i.coords.lon}
            onClick={() => {
                setCity(i.name)
                setSubject(i.subject)
            }}
          >{i.name} <small>{i.subject}</small></li>
        )
    })

    return(
        <div className="city">
            {subject || ''}
            <label htmlFor={'city'}>Город</label>
            <input 
                id='city' 
                type='text'
                placeholder='Введите город' 
                value={city}
                onChange={e => {
                    setCity(e.target.value)
                }}
                autoComplete="off"
            /> 
            <ul className={"autocomplete__list"}>
                {filterCity}
            </ul>      
        </div>
    )
}