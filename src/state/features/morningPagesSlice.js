import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  morningPages: [],
  morningPage: {},
};

export const morningPagesSlice = createSlice({
  name: "morningPages",
  initialState,
  reducers: {
    setMorningPages: (state, action) => {
      state.morningPages = action.payload;
    },
    setMorningPage: (state, action) => {
      state.morningPage = action.payload;
    },
  },
});

export const { setMorningPages, setMorningPage } = morningPagesSlice.actions;

export default morningPagesSlice.reducer;
