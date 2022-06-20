import { configureStore } from "@reduxjs/toolkit";
import morningPagesSlice from "./features/morningPagesSlice";
import themesSlice from "./features/themesSlice";
import authSlice from "./features/authSlice";
import loaderSlice from "./features/loaderSlice";

export const store = configureStore({
  reducer: {
    morningPages: morningPagesSlice,
    themes: themesSlice,
    auth: authSlice,
    loader: loaderSlice,
  },
});
