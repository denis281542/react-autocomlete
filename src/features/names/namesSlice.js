import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    names: [],
    status: 'idle',
    error: null
}

export const fetchNames = createAsyncThunk('names/fetchNames', async () => {
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/megalandpark.appspot.com/o/russian_names.json?alt=media&token=33f85cec-a3be-4a65-8e98-25be7c9a6d67')
    return await res.json()
})

export const namesSlice = createSlice({
    name: 'names',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(fetchNames.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchNames.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.names = state.names.concat(action.payload)
          })
          .addCase(fetchNames.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default namesSlice.reducer
export const selectAllNames = state => state.names.names

