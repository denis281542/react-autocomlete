import { configureStore } from '@reduxjs/toolkit';
import streetsReducer from '../features/street/streetsSlice';
import housesReducer from '../features/houses/housesSlice';
import flatsReducer from '../features/flats/flatsSlice';
<<<<<<< HEAD
import addressReducer from '../features/address/addressSlice';
<<<<<<< HEAD
import usersReducer from '../features/users/userSlice';
=======
=======
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
import userReducer from '../features/user/userSlice';
>>>>>>> main

export default configureStore({
    reducer: {
        streets: streetsReducer,
        houses: housesReducer,
        flats: flatsReducer,
<<<<<<< HEAD
        address: addressReducer,
<<<<<<< HEAD
        users: usersReducer,
=======
=======
>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
        user: userReducer,
>>>>>>> main
    }
})
