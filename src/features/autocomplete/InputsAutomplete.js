import '../../App.css';
import { Input } from './Input';
import { fetchStreets, selectAllStreet, selectStatusStreets } from '../street/streetsSlice';
import { clearHouses, fetchHouses, selectAllHouse, selectStatusHouses } from '../houses/housesSlice';
import { clearFlats, fetchFlats, selectAllFlats, selectStatusFlats } from '../flats/flatsSlice';
import { addressFlat, addressHouse, addressStreet, getAddressId } from '../address/addressSlice';

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
                fetchNext={fetchFlats} 
                getAddressId={getAddressId} 
                address={addressFlat}        
            /> 

        </div>
    );
}