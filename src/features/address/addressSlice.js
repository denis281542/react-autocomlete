import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = { 
    street: null, 
    house: null,
    flat: null,
    addressId: null 
}

const addressSlice = createSlice({
    name: 'address',
    initialState: { addressId: null },
    reducers: {
        addressStreet(state, action) {
            state.street = action.payload
        },
        addressHouse(state, action) {
            state.house = action.payload
        },
        addressFlat(state, action) {
            state.flat = action.payload
        },
        getAddressId(state, action) {
            state.addressId = action.payload
        }
    }
})

export const { addressStreet, addressHouse, addressFlat, getAddressId } = addressSlice.actions

export default addressSlice.reducer