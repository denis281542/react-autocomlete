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
            const { flat, id } = action.payload
            state.flat = flat
            state.addressId = id
        }
    }
})

export const { addressStreet, addressHouse, addressFlat, getAddressId } = addressSlice.actions

export default addressSlice.reducer