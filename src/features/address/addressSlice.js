import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: 'address',
    initialState: { addressId: null },
    reducers: {
        getAddressId(state, action) {
            state.addressId = action.payload
        }
    }
})

export const { getAddressId } = addressSlice.actions

export default addressSlice.reducer