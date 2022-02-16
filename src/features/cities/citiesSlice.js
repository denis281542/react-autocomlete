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
console.log(fetchCities());

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {}
})

// export const citiesSlice = createSlice({
//     name: 'cities',
//     initialState,
//     reducers: {
//         getUsers: {
//             reducer(state,action)
//         }
//     }
// })


export default citiesSlice.reducer