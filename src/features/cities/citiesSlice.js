import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cities: [],
    status: 'idle',
    error: null
}


export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/megalandpark.appspot.com/o/cities.json?alt=media&token=452c6222-c43a-4a57-81a3-2bc148b527d2')
    return await res.json()
})

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(fetchCities.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchCities.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.cities = state.cities.concat(action.payload)
          })
          .addCase(fetchCities.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default citiesSlice.reducer

export const selectAllCities = state => state.cities.cities
