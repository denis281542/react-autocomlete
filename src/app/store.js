import { configureStore } from '@reduxjs/toolkit';
import streetsReducer from '../features/street/streetsSlice';
import housesReducer from '../features/houses/housesSlice';
import flatsReducer from '../features/flats/flatsSlice';
import addressReducer from '../features/address/addressSlice';
import userReducer from '../features/user/userSlice';

export default configureStore({
    reducer: {
        streets: streetsReducer,
        houses: housesReducer,
        flats: flatsReducer,
        address: addressReducer,
        user: userReducer,
    }
})
