import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  morningPages: [],
  morningPage: {},
  editMode: false,
  selectedTheme: null,
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
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
    setSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const {
  setMorningPages,
  setMorningPage,
  setEditMode,
  setSelectedTheme,
} = morningPagesSlice.actions;

export default morningPagesSlice.reducer;
