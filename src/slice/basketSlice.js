import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      state.basket.push(action.payload);
    },
    delateItem(state, action) {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    clearBasket(state) {
      state.basket = [];
    },
  },
});

export const { addItem, delateItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
