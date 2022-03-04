import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: 'idle',
    error: null
}

export const fetchUsers = createAsyncThunk('user/fetchUsers',
    async addressId => {
        const response = await fetch(`https://dispex.org/api/vtest/HousingStock/clients?addressId=${addressId}`);
        return response.json()
    }
)

export const postUser = createAsyncThunk('user/postUser',
    async user => {
        const response = await fetch('https://dispex.org/api/vtest/HousingStock/client', {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(user)
        });
        return await response.json()
    }
)

export const bindUser = createAsyncThunk('user/postUser', async ({addressId, id}) => {
        const response =  await fetch('https://dispex.org/api/vtest/HousingStock/bind_client', {
            method: 'PUT', 
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify({ 
                AddressId: addressId, 
                ClientId: id 
            })
        })
        return response.status
    }  
)

export const removeUser = createAsyncThunk('user/removeUser',
    async bindId => {
      const res = await fetch(`https://dispex.org/api/vtest/HousingStock/bind_client/${bindId}`, {
        method: 'DELETE'
      })
      return res.status
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded(state, action) {
            state.users.push(action.payload)
        },
        clearUsers(state) {
            state.status = "idle"
            state.users = []
        },
        userUpdated(state, action) {
            const {name, phone, email, id} = action.payload
            const existingUser = state.users.find(user => user.id === id)

            if(existingUser) {
                existingUser.name = name
                existingUser.phone = phone
                existingUser.email = email
                console.log(existingUser.phone);

            }
        }
    },
    extraReducers(builder) {
        builder.addCase(removeUser.fulfilled, state => {
          state.id = null
        })
        .addCase(fetchUsers.pending, state => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = state.users.concat(action.payload)
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(postUser.fulfilled, (state, action) => {
            state.status = 'succeeded'
            console.log(state.users.users );
            console.log(action.payload );
            // state.users.users = state.users.users.push(action.payload)
        })

        // .addCase(bindUser.fulfilled, (state, action) => {
        //     console.log(action.payload);
        // })
    }
})

export const { userAdded, clearUsers, userUpdated } = usersSlice.actions
export default usersSlice.reducer