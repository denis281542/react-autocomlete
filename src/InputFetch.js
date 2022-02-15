import { useState, useEffect } from "react"

export const InputFetch = () => {
    const [subject, setSubject] = useState('')
    const [city, setCity] = useState('')
    const [filterCities, setFilterCities] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {    
        fetch('https://firebasestorage.googleapis.com/v0/b/megalandpark.appspot.com/o/cities.json?alt=media&token=452c6222-c43a-4a57-81a3-2bc148b527d2')
            .then(response => response.json())
            .then(json => setCities(json))

        document.body.addEventListener('click', closeAutocomplete);
        document.addEventListener('keydown', escFunction);

        return () => {
            document.body.removeEventListener('click', closeAutocomplete);
            document.removeEventListener('keydown', escFunction);
        }
    }, []) 
    // useEffect(() => {    
    //     
    // }, []) 

    const closeAutocomplete = e => {
        if(!e.target.closest('li')) {
            setFilterCities([])
        }
    }

    const escFunction = (e) => {
        if (e.key === "Escape") {
            setFilterCities([])
        }
    }

    const filterCity = filterCities.map(c => {
        return(
            <li 
            className="autocomplete__item"
            key={c.coords.lat + c.coords.lon}
            onClick={() => {
                setCity(c.name)
                setFilterCities([])
                setSubject(c.subject)
            }}
            >{c.name} <small>{c.subject}</small></li>
        )
    })
    

    return(
        <div className="city">
        {subject}
        <label htmlFor="city">Город</label>
        <input 
          id='city' 
          type="text" 
          placeholder="Введите город" 
          autoComplete="off"
          onChange={e => {
            setCity(e.target.value)
            setFilterCities(cities.filter(c => c.name.toLowerCase().includes(e.target.value)))
          }}
          value={city}
        /> 
        <ul className="autocomplete__list"> 
          {filterCity}
        </ul>      
      </div>
    )
}