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

export default userSlice.reducer