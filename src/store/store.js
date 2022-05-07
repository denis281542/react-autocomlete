import { configureStore } from '@reduxjs/toolkit';
import streetsReducer from './reducers/streetsSlice';
import housesReducer from './reducers/housesSlice';
import flatsReducer from './reducers/flatsSlice';
import addressReducer from './reducers/addressSlice';
import usersReducer from './reducers/userSlice';

export default configureStore({
    reducer: {
        streets: streetsReducer,
        houses: housesReducer,
        flats: flatsReducer,
        address: addressReducer,
        users: usersReducer,
    }
})
