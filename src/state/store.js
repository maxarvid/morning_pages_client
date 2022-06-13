import { configureStore } from "@reduxjs/toolkit";
import themesSlice from "./features/themesSlice";

export const store = configureStore({
  reducer: {
    themes: themesSlice,
  },
});
