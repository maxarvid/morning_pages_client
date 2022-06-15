import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  morningPages: [],
};

export const morningPagesSlice = createSlice({
  name: "morningPages",
  initialState,
  reducers: {
    setMorningPages: (state, action) => {
      state.morningPages = action.payload;
    },
  },
});

export const { setMorningPages } = morningPagesSlice.actions;

export default morningPagesSlice.reducer;
