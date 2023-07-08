import { configureStore, combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "../slices/restaurantSlice";
import basketReducer from "../slices/basketSlice";
import menuSlice from "@/slices/menuSlice";

const reducer = combineReducers({
  restaurant: restaurantReducer,
  basket: basketReducer,
  menu: menuSlice,
});

export const store = configureStore({
  reducer,
});
