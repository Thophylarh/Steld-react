import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
  loading: false,
  error: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.allItems = [...state.allItems, payload];
    },
  },
});

const { actions: cartActions, reducers: cartReducers } = cartSlice;

export { cartActions, cartReducers };
