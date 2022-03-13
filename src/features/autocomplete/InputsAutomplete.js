import '../../App.css';
import { Input } from './Input';
import { fetchStreets, selectAllStreet, selectStatusStreets } from '../street/streetsSlice';
import { clearHouses, fetchHouses, selectAllHouse, selectStatusHouses } from '../houses/housesSlice';
import { clearFlats, fetchFlats, selectAllFlats, selectStatusFlats } from '../flats/flatsSlice';
import { addressFlat, addressHouse, addressStreet, getAddressId } from '../address/addressSlice';
import { Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearUsers, fetchUsers } from '../users/userSlice';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';

export const InputsAutomplete = () => { 
    const streets = useSelector(selectAllStreet)
    const houses = useSelector(selectAllHouse)
    const flats = useSelector(selectAllFlats)

    const [house, setHouse ] = useState(null)
    const [flat, setFlat ] = useState(null)
    const dispatch = useDispatch()
    const status = useSelector(selectStatusStreets)   

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchStreets())
        } 
    }, [status, dispatch])



    const [values, setValues] = useState(null)





    return (
        <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
            <Autocomplete
                disablePortal
                noOptionsText='Совпадения не найдены'
                id="combo-box-demo"
                options={streets}
                onChange={(event, value) => {
                    dispatch(fetchHouses(value.id))
                    dispatch(addressStreet(value.name))
                }}
                getOptionLabel={value => value.name}
                sx={{ width: 300, padding: '5px' }}
                renderInput={(params) => <TextField {...params} label="Улица" />}
            />
            <Autocomplete
                disablePortal
                noOptionsText='Совпадения не найдены'
                id="combo-box-demo"
                options={houses}
                onChange={(event, value) => {
                    if(value != null) {
                        dispatch(addressHouse(value.name))
                        dispatch(fetchFlats(value.id))
                }}}
                getOptionLabel={value => value.name}
                sx={{ width: 300, padding: '5px' }}
                renderInput={(params) => <TextField {...params} 
                    onFocus={e => setHouse(e.target.value)} 
                    onChange={e => {
                        if(house.length > e.target.value.length) {
                            dispatch(clearUsers())
                            dispatch(clearFlats())
                            setFlat(null)


                            setValues(null)
                            

                    }}}
                    label="Дом" 
                />}
            />
            <Autocomplete


                options={flats}
                getOptionLabel={flat => flat.name}
                value={values}
                onChange={(_, value) => {
                    setValues(value)
                    if(value != null) {
                        dispatch(addressFlat({flat: value.name, id: value.id}))
                        dispatch(fetchUsers(value.id)) 
                    }
                }}



                disablePortal
                clearText='Удалить'
                noOptionsText='Совпадения не найдены'
                id="combo-box-demo"
                sx={{ width: 300, padding: '5px' }}
                renderInput={(params) => {
                    return <TextField {...params}
                        onFocus={e => setFlat(e.target.value)} 
                        onChange={e => flat.length > e.target.value.length ? dispatch(clearUsers()) : null}
                        label="Квартира" 
                    />}
                }
            />

        </Box>
    );
}
