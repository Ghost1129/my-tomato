import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restras: [],
};

const restrasSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setRestras: (state, action) => {
      state.restras = action.payload;
    },
  },
});

export const { setRestras } = restrasSlice.actions;

export const selectRestras = (state) => state.menu.restras;

export default restrasSlice.reducer;
