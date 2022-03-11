import '../../App.css';
import { Input } from './Input';
import { fetchStreets, selectAllStreet, selectStatusStreets } from '../street/streetsSlice';
import { clearHouses, fetchHouses, selectAllHouse, selectStatusHouses } from '../houses/housesSlice';
import { clearFlats, fetchFlats, selectAllFlats, selectStatusFlats } from '../flats/flatsSlice';
import { addressFlat, addressHouse, addressStreet, getAddressId } from '../address/addressSlice';
import { Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearUsers, fetchUsers } from '../users/userSlice';
import { useState } from 'react';

export const InputsAutomplete = () => { 
    const streets = useSelector(selectAllStreet)
    const houses = useSelector(selectAllHouse)
    const flats = useSelector(selectAllFlats)

    const [item, setItem ] = useState(null)

    const dispatch = useDispatch()

    return (
        <div className="card">
            <Input 
                htmlFor='street'
                label='Улица'
                id='street'
                type='text'
                placeholder='Введите удицу'
                selectAll={selectAllStreet}
                selectStatus={selectStatusStreets}
                fetch={fetchStreets}        
                fetchNext={fetchHouses}
                clearHouse={clearHouses}        
                clearFlat={clearFlats}        
                address={addressStreet}        
            /> 

            <Input 
                htmlFor='house'
                label='Дом'
                id='house'
                type='text'
                placeholder='Введите дом'
                selectAll={selectAllHouse}
                selectStatus={selectStatusHouses}
                fetch={fetchHouses}  
                fetchNext={fetchFlats}  
                clearFlat={clearFlats}     
                address={addressHouse}        
            />

            <Input 
                htmlFor='flat'
                label='Квартира'
                id='flat'
                type='text'
                placeholder='Введите номер квартиры'
                selectAll={selectAllFlats}
                selectStatus={selectStatusFlats}
                fetch={fetchFlats}  
                fetchNext={fetchFlats} 
                getAddressId={getAddressId} 
                address={addressFlat}        
            /> 

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={streets}
                onChange={(event, value) => {
                    dispatch(fetchHouses(value.id))
                    dispatch(addressStreet(value.name))
                }}
                getOptionLabel={value => value.name}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Улица" />}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={houses}
                onChange={(event, value) => {
                    dispatch(addressHouse(value.name))
                    dispatch(fetchFlats(value.id))
                }}
                getOptionLabel={value => value.name}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Дом" />}
            />
            <Autocomplete
                disablePortal
                noOptionsText='Совпадения не найдены'
                id="combo-box-demo"
                options={flats}
                onChange={(event, value) => {
                    if(value != null) {
                        dispatch(addressFlat(value.name))
                        dispatch(fetchUsers(value.id)) 
                    }}}
                getOptionLabel={value => value.name}
                sx={{ width: 300 }}
                renderInput={(params) => {
                    return <TextField {...params} 
                        onFocus={e => setItem(e.target.value)} 
                        onChange={e => item.length > e.target.value.length ? dispatch(clearUsers()) : null}
                        label="Квартива" 
                    />}
                }
            />

        </div>
    );
}
