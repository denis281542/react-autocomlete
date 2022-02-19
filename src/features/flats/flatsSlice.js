import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    flats: [],
    status: null,
    error: null
}

export const fetchFlats = createAsyncThunk('flats/fetchFlats', async (id) => {
  const res = await fetch(`https://dispex.org/api/vtest/Request/house_flats/${id}`)
  return await res.json()
})

const flatsSlice = createSlice({
    name: 'flats',
    initialState,
    reducers: {
      clearFlats(state) {
        state.flats = []
        state.status = 'clear'
      }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchFlats.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(fetchFlats.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.flats = state.flats.concat(action.payload)
          })
          .addCase(fetchFlats.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { clearFlats } = flatsSlice.actions

export default flatsSlice.reducer
export const selectAllFlats = state => state.flats.flats
export const selectStatusFlats = state => state.flats.status
