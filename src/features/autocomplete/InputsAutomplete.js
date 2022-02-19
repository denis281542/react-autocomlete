import '../../App.css';
import { Input } from './Input';
// import { fetchNames, selectAllNames } from "../names/namesSlice"; 
// import {fetchCities, selectAllCities} from '../cities/citiesSlice';
import { fetchStreets, selectAllStreet, selectStatusStreets } from '../street/streetsSlice';
import { fetchHouses, selectAllHouse, selectStatusHouses } from '../houses/housesSlice';
import { fetchFlats, selectAllFlats, selectStatusFlats } from '../flats/flatsSlice';

export const InputsAutomplete = () => { 
    console.log(selectAllHouse);
    return (
        <div className="card">
            {/* <Input 
                htmlFor='city'
                label='Город'
                id='city'
                type='text'
                placeholder='Введите город'
                selectAll={selectAllCities}
                fetch={fetchCities}        
            /> 

            <Input 
                htmlFor='name'
                label='Имя'
                id='name'
                type='text'
                placeholder='Введите имя'
                selectAll={selectAllNames}
                fetch={fetchNames}        
            />  */}
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
            /> 
            {/* <Input 
                htmlFor='house'
                label='Дом'
                id='house'
                type='text'
                placeholder='Введите дом'
                selectAll={selectAllHouse}
                fetch={fetchHouses}        
            />  */}
        </div>
    );
}