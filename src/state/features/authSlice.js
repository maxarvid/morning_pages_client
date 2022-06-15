import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
