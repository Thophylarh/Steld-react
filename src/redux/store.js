import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./slice/cart.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
