import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartfor: "",
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    updatecartfor: (state, action) => {
      state.cartfor = action.payload;
    },
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      state.items = newBasket;
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addToBasket, removeFromBasket, updatecartfor, clearBasket } =
  basketSlice.actions;

export const selectedBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectcartfor = (state) => state.basket.cartfor;

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
export default basketSlice.reducer;
