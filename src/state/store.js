import { configureStore } from "@reduxjs/toolkit";
import morningPagesSlice from "./features/morningPagesSlice";
import themesSlice from "./features/themesSlice";

export const store = configureStore({
  reducer: {
    morningPages: morningPagesSlice,
    themes: themesSlice,
  },
});
