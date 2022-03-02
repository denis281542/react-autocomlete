import '../../App.css';
import { Input } from './Input';
<<<<<<< HEAD
import { ModalWindow } from '../modal/ModalWindow'
import { fetchStreets, selectAllStreet, selectStatusStreets, getStreet } from '../street/streetsSlice';
import { clearHouses, fetchHouses, selectAllHouse, selectStatusHouses } from '../houses/housesSlice';
import { clearFlats, fetchFlats, selectAllFlats, selectStatusFlats } from '../flats/flatsSlice';
<<<<<<< HEAD
import { addressFlat, addressHouse, addressStreet, getAddressId } from '../address/addressSlice';
import { useSelector } from 'react-redux';
=======
import { getAddressId } from '../address/addressSlice';
=======
import { ModalWindow } from '../modal/Modal';
// import { fetchNames, selectAllNames } from "../names/namesSlice"; 
// import {fetchCities, selectAllCities} from '../cities/citiesSlice';
import { fetchStreets, selectAllStreet, selectStatusStreets } from '../street/streetsSlice';
import { clearHouses, fetchHouses, selectAllHouse, selectStatusHouses } from '../houses/housesSlice';
import { clearFlats, fetchFlats, selectAllFlats, selectStatusFlats } from '../flats/flatsSlice';
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
>>>>>>> main

export const InputsAutomplete = () => { 
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
<<<<<<< HEAD
                fetchNext={fetchFlats} 
                getAddressId={getAddressId} 
                address={addressFlat}        
            /> 

            <ModalWindow />

=======
            /> 
            <ModalWindow />

            {/* <Input 
                htmlFor='house'
                label='Дом'
                id='house'
                type='text'
                placeholder='Введите дом'
                selectAll={selectAllHouse}
                fetch={fetchHouses}        
            />  */}
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
        </div>
    );
}