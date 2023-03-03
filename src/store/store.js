
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "../slices/restaurantSlice";
import basketReducer from "../slices/basketSlice";


const reducer = combineReducers({
    restaurant: restaurantReducer,
    basket: basketReducer,

});

export const store = configureStore({
    reducer,
  });