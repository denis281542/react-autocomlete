import { configureStore } from '@reduxjs/toolkit';
// import citiesReducer from '../features/cities/citiesSlice';
// import namesReducer from '../features/names/namesSlice';
import streetsReducer from '../features/street/streetsSlice';
import housesReducer from '../features/houses/housesSlice';
import flatsReducer from '../features/flats/flatsSlice';
import userReducer from '../features/user/userSlice';

export default configureStore({
    reducer: {
        // cities: citiesReducer,
        // names: namesReducer,
        streets: streetsReducer,
        houses: housesReducer,
        flats: flatsReducer,
        user: userReducer,
    }
})
