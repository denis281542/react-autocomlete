import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    streets: [],
    status: 'idle',
    error: null,
}

export const fetchStreets = async () => {
    const res = await fetch('https://dispex.org/api/vtest/Request/streets')
    return await res.json()
}

export const streetsSlice = createSlice({
    name: 'streets',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchStreets.fulfilled, (state, action) => {
            return action.payload
        })
    }
})