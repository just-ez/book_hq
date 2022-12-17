

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userdata: [],
};

export const UserSlice = createSlice({
  name: "usedetails",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.userdata = action.payload;
    },
    resetDetails: (state, action) => {
      state.userdata = [];
    }
  }
});

export const { setDetails,setToken,resetDetails } = UserSlice.actions;

export default UserSlice.reducer;