import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themes: [],
};

export const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setThemes: (state, action) => {
      state.themes = action.payload;
    },
  },
});

export const { setThemes } = themesSlice.actions;

export default themesSlice.reducer;
