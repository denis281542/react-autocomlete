import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    phone: null,
    name: null,
    email: null,
    id: null
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
        return await response.json()
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
          state.id = action.payload.id
        })
    }
})

export const { userAdded } = userSlice.actions
export default userSlice.reducer