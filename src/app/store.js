import { configureStore } from '@reduxjs/toolkit';
import streetsReducer from '../features/street/streetsSlice';
import housesReducer from '../features/houses/housesSlice';
import flatsReducer from '../features/flats/flatsSlice';
<<<<<<< HEAD
import addressReducer from '../features/address/addressSlice';
=======
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
import userReducer from '../features/user/userSlice';

export default configureStore({
    reducer: {
        streets: streetsReducer,
        houses: housesReducer,
        flats: flatsReducer,
<<<<<<< HEAD
        address: addressReducer,
=======
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
        user: userReducer,
    }
})
