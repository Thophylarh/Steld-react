import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./slice/cart.slice";
import { categoryReducer } from "./slice/product/categories.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducers,
    categories:categoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
