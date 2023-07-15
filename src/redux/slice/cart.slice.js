import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  ],
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

//destructure actions and reducers from the slice
const { actions: cartActions, reducer: cartReducers } = cartSlice;

// export reducer
export { cartReducers };

// export actions
export const { addProduct } = cartActions;
