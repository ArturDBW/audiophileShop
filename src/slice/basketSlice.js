import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingProduct = state.basket.find(
        (item) => item.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.unitPrice;
      } else {
        state.basket.push(action.payload);
      }
    },
    delateItem(state, action) {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.basket.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.basket.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        basketSlice.caseReducers.delateItem(state, action);
    },
    clearBasket(state) {
      state.basket = [];
    },
  },
});

export const {
  addItem,
  delateItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;

export const getBasket = (state) => state.basket.basket;

export const getTotalCartQuantity = (state) =>
  state.basket.basket.reduce((sum, curr) => sum + curr.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.basket.basket.reduce((sum, curr) => sum + curr.totalPrice, 0);
