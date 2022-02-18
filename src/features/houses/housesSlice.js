import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    houses: [],
    // id: null,
    status: 'idle',
    error: null
}

export const fetchHouses = createAsyncThunk('house/fetchHouses', async() => {
    const res = await fetch('https://dispex.org/api/vtest/Request/houses/134')
    return await res.json()
})

const houseSlice = createSlice({
    name: 'houses',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(fetchHouses.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchHouses.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.houses = state.houses.concat(action.payload)
          })
          .addCase(fetchHouses.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { getId } = houseSlice.actions
export default houseSlice.reducer
export const selectAllHouse = state => state.houses.houses
export const selectStatusHouses = state => state.houses.status
