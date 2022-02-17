import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cities: [],
    status: 'idle',
    error: null
}


export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/megalandpark.appspot.com/o/cities.json?alt=media&token=7c779e23-9863-49ac-80e6-aa7d06651162')
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
