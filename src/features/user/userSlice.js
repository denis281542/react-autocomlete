<<<<<<< HEAD
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    phone: null,
    name: null,
    email: null
}

export const postUser = createAsyncThunk('user/postUser',
    async user => {
        const response = await fetch('https://dispex.org/api/vtest/HousingStock/client', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(user) 
        });
        return response
    }
  )

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAdded(state, action) {
            return {...state = action.payload}
        }
    },
    extraReducers(builder) {
        builder.addCase(postUser.fulfilled, (state, action) => {
            console.log(state);
            console.log(action.payload);
          return {...state = action.payload}
        })
    }
})

export const { userAdded } = userSlice.actions
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    phone: null,
    email: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

>>>>>>> 72b1d7b03ef42857596cf69c677b514efe4beb43
export default userSlice.reducer