import { useSelector, useDispatch } from 'react-redux';
import {fetchCities, selectAllCities} from './features/cities/citiesSlice'
import {useState, useEffect} from 'react'


export const InputCities = () => {
    const dispatch = useDispatch()
    const cities = useSelector(selectAllCities)
    const [subject, setSubject] = useState('')
    const [city, setCity] = useState('')

    const cityStatus = useSelector(state => state.cities.status)

    useEffect(() => {
        if (cityStatus === 'idle') {
            dispatch(fetchCities())
        }
    }, [cityStatus, dispatch])

    const filterCity = cities.filter(c => c.name.toLowerCase().includes(city)).map(city => {
        return(
          <li 
            className="autocomplete__item"
            key={city.coords.lat + city.coords.lon}
            onClick={() => {
                setCity(city.name)
                setSubject(city.subject)
            }}
          >{city.name} <small>{city.subject}</small></li>
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