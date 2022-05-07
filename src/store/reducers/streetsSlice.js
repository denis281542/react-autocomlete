import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    streets: [],
    status: 'idle',
    error: null,
    street: null
}

export const fetchStreets = createAsyncThunk('streets/fetchStreets', async () => {
    return await fetch('https://dispex.org/api/vtest/Request/streets')
        .then(response => response.json())
        .then(data => data)
})

const streetsSlice = createSlice({
    name: 'streets',
    initialState,
    reducers: {
        clearStreets(state) {
            state.streets = []
            state.status = 'idle'
        },
        getStreet(state, action) {
            return { ...state.street = action.payload }
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchStreets.pending, state => {
            state.status = 'loading'
          })
          .addCase(fetchStreets.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.streets =  action.payload          
          })
          .addCase(fetchStreets.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { clearStreets, getStreet } = streetsSlice.actions

export default streetsSlice.reducer
export const selectAllStreet = state => state.streets.streets
export const selectStatusStreets = state => state.streets.status
