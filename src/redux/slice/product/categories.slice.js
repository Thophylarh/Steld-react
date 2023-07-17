import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, { payload }) => {
      state.allCategories = [...state.allCategories, payload];
    },
  },
});

const {actions:categoryActions, reducer:categoryReducer} = categorySlice;

export {categoryReducer};

export const {addCategories} = categoryActions;
