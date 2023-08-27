"use client";

import ContactSlice from "../features/Contact";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    [ContactSlice.reducerPath]: ContactSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ContactSlice.middleware),
  devTools: true,
});

export default store;
