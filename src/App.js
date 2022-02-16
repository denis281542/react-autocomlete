import './App.css';
import {useState, useEffect} from 'react'
import {InputFetch} from './InputFetch';
import { useDispatch } from 'react-redux';
import {fetchCities} from './features/cities/citiesSlice'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // if (postStatus === 'idle') {
      dispatch(fetchCities())
  }, [])
  // const [street, setStreet] = useState('')
  // const [streets, setStreets] = useState([])
  // const [id, setId] = useState('')
  // const [addressId, setAddressId] = useState('')
  // const [houseId, setHouseId] = useState('')
  // const [house, setHouse] = useState('')
  // const [houses, setHouses] = useState([])
  // const [flat, setFlat] = useState('')
  // const [flats, setFlats] = useState([])
  // const [phone, setPhone] = useState('')
  // // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [clientId, setClientId] = useState(0)
  // const [clients, setClients] = useState([])

  // const user = {
  //   Id: 0,
  //   // Name: name,
  //   Phone: phone,
  //   Email: email,
  //   BindId: 0
  // }
  
  // const searchStreet = async (text) => {
  //   const res = await fetch(`https://dispex.org/api/vtest/Request/streets`)
  //   const streets = await res.json();
  //   setStreets(streets);
  // }

  // const searchHouse = async (id) => {
  //   const res = await fetch(`https://dispex.org/api/vtest/Request/houses/${id}`)
  //   const houses = await res.json();
  //   setHouses(houses);
  // }
  
  // const filteredStreet = streets.filter(s => s.name.substring(0, street.length).toLowerCase() === street.toLowerCase())
  // const filteredHouse = houses.filter(h => h.name.substring(0, house.length).toLowerCase() === house.toLowerCase())
  // const filteredFlat = flats.filter(h => h.name.substring(0, flat.length).toLowerCase() === flat.toLowerCase())
    
  // const searchFlat = async (id) => {
  //   const res = await fetch(`https://dispex.org/api/vtest/Request/house_flats/${id}`)
  //   const flats = await res.json();
  //   setFlats(flats);
  // }

  // const addClient = async () => {
  //   const response = await fetch('https://dispex.org/api/vtest/HousingStock/client', {
  //     method: 'POST', 
  //     mode: 'cors',
  //     cache: 'no-cache', 
  //     credentials: 'same-origin', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     redirect: 'follow',
  //     referrerPolicy: 'no-referrer', 
  //     body: JSON.stringify(user) 
  //   });
  //   return console.log(response)
  // }

  // const bindClient = async () => {
  //   const res = await fetch(`https://dispex.org/api/vtest/HousingStock/client?phone=${phone}`)
  //   const client = await res.json()
  //   setClientId(client.id);

  //   const response = await fetch('https://dispex.org/api/vtest/HousingStock/bind_client', {
  //     method: 'PUT', 
  //     mode: 'cors',
  //     cache: 'no-cache', 
  //     credentials: 'same-origin', 
  //     headers: {
  //       // 'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //     },
  //     redirect: 'follow',
  //     referrerPolicy: 'no-referrer', 
  //     body: JSON.stringify({
  //       AddressId: addressId,
  //       ClientId: client.id
  //     })
  //   });
  //   return await response.json() 
  // }

  // const getClients = async () => {
  //   const response = await fetch(`https://dispex.org/api/vtest/HousingStock/clients?addressId=${addressId}`);
  //   const clients = await response.json()
  //   setClients(clients)
  //   return console.log(clients);
  // }

  // const deleteClient = async bindId => {
  //   const res = await fetch(`https://dispex.org/api/vtest/HousingStock/bind_client/${bindId}`, {
  //     method: 'DELETE'
  //   });
  // }

  // let flatClients = clients.map(client => {
  //   return(
  //     <div key={client.id}>
  //       <div>Имя: {client.name}</div>
  //       <div>Телефон: {client.phone}</div>
  //       <div>Email: {client.email}</div>
  //       <button onClick={() => deleteClient(client.bindId)}>Удалить жильца</button>
  //     </div>
  //   )
  // })

  
 

  






const [names, setNames] = useState([])
const [name, setName] = useState('')
const [fetchNames, setFetchNames] = useState([])
const [filterCities, setFilterCities] = useState([])
const [city, setCity] = useState('')
const [subject, setSubject] = useState('')
const [cities, setCities] = useState([])

useEffect(() => {
  fetch('https://firebasestorage.googleapis.com/v0/b/megalandpark.appspot.com/o/russian_names.json?alt=media&token=33f85cec-a3be-4a65-8e98-25be7c9a6d67')
    .then(response => response.json())
    .then(json => setNames(json))

  fetch('https://firebasestorage.googleapis.com/v0/b/megalandpark.appspot.com/o/cities.json?alt=media&token=452c6222-c43a-4a57-81a3-2bc148b527d2')
    .then(response => response.json())
    .then(json => setCities(json))

  document.body.addEventListener('click', closeAutocomplete);
  document.addEventListener("keydown", escFunction);

  return () => {
    document.removeEventListener('click', closeAutocomplete);
    document.removeEventListener("keydown", escFunction);
  };
}, []) 

const closeAutocomplete = e => {
  if(!e.target.closest('li')) {
      setFetchNames([])
      setFilterCities([])
  }
}  

const escFunction = (e) => {
  if (e.key === "Escape") {
    setFetchNames([])
    setFilterCities([])
  }
}

let filteredList
  if(fetchNames.length < 500) {
    filteredList = fetchNames.map(name => {
      return(
        <li 
        className="autocomplete__item"
        key={name.ID}
        onClick={() => {
            setName(name.Name)
            setFetchNames([])
        }}
        >{name.Name}</li>
      )
    })
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

  const onChange = e => {
    setName(e.target.value)
    setFetchNames(names.filter(n => n.Name.toLowerCase().includes(e.target.value)))
  }

  const onChangeCity = e => {
    setCity(e.target.value)
    setFilterCities(cities.filter(c => c.name.toLowerCase().includes(e.target.value)))
  }

  return (
    <div className="card">
      <InputFetch
        label='Город'
        htmlFor='city'
        id='city'
        text='text'
        placeholder='Введите город'
        filteredList={filterCity}
        value={city}
        onChange={onChangeCity}
      />

      <InputFetch
        label='Имя'
        htmlFor='name'
        id='name'
        text='text'
        placeholder='Введите имя'
        filteredList={filteredList}
        value={name}
        onChange={onChange}
      />

      {/* <div>
        <label htmlFor='street'>Улица</label>
        <input 
          id='street' 
          type='text'
          value={street}
          onChange={e => {
            setStreet(e.target.value)
            searchStreet(street)
          }}
        />
        {filteredStreet.map(s => {
          return(
            <p 
              key={s.id}
              onClick={() => {
                console.log(s.id);
                setStreet(s.name)
                setStreets([])
                setId(s.id)}}
            >{s.name}</p>
          )
        })}
      </div>

      <div>
        <label htmlFor='house'>Дом</label>
        <input 
          id='house' 
          type='text'
          value={house}
          onChange={e => {
            setHouse(e.target.value)
          }}
          onFocus={() => searchHouse(id)}
        />
        {filteredHouse.map(house => {
          return(
            <p 
              key={house.id}
              onClick={() => {
                setHouse(house.name)
                setHouses([])
                setHouseId(house.id)}}
            >{house.name}</p>
          )
        })}
      </div>

      <div>
        <label htmlFor='flat'>Квартира</label>
        <input 
          id='flat' 
          type='text'
          value={flat}
          onChange={e => {
            setFlat(e.target.value)
          }}
          onFocus={() => searchFlat(houseId)}
        />
        {filteredFlat.map(f => {
          return(
            <p 
              key={f.id}
              onClick={() => {
                setAddressId(f.id);
                setFlat(f.name)
                setFlats([])
                setHouseId(f.id)}}
            >{f.name}</p>
          )
        })}
      </div>

      <div style={{paddingTop: "20px"}}>Текущий адрес</div>
      <div>Улица: {street}</div>
      <div>Дом: {house}</div>
      <div>Квартира: {flat}</div>

      <div>
        <label htmlFor="phone">Телефон</label>
        <input 
          id='phone' 
          type="number" 
          placeholder="Введите телефон" 
          onChange={e => setPhone(e.target.value)}
          value={phone}
        />  
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          id='email' 
          type="email" 
          placeholder="Введите email" 
          onChange={e => setEmail(e.target.value)}
        />  
      </div>
       */}
      

      {/* <button onClick={addClient}>Добавить жильца</button>
      <button onClick={bindClient}>Привязать жильца</button>
      <button onClick={getClients}>Показать жильцов</button>
        {flatClients} */}
    </div>
  );
}

export default App;
