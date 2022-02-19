import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    houses: [],
    status: null,
    error: null
}
// let selectIdInput = 134
export const fetchHouses = createAsyncThunk('house/fetchHouses', async (id) => {
  const res = await fetch(`https://dispex.org/api/vtest/Request/houses/${id}`)
  return await res.json()
})

const houseSlice = createSlice({
    name: 'houses',
    initialState,
    reducers: {
      clearHouses(state) {
        state.houses = []
        state.status = 'clear'
      }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchHouses.pending, (state) => {
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

export const { clearHouses } = houseSlice.actions

export default houseSlice.reducer
export const selectAllHouse = state => state.houses.houses
export const selectStatusHouses = state => state.houses.status
export const selectId = state => state.houses.id
