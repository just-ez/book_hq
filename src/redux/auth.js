import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const AuthSlice = createSlice({
    name:"logged",
    initialState,
    reducers:{
        loggedIn : (state, action) => {
            state.value = true
        },
        loggedOut : (state) => {
          state.value = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { loggedIn, loggedOut} = AuthSlice.actions

export default AuthSlice.reducer