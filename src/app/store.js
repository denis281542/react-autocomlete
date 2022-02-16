import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../features/cities/citiesSlice';
import namesReducer from '../features/names/namesSlice';

export default configureStore({
    reducer: {
        cities: citiesReducer,
        names: namesReducer,
    }
})
