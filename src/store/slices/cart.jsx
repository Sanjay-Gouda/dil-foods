import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cart = createSlice({
  name: "productCart",
  initialState: initialState,
  reducers: {
    handleCart: (state, action) => {
      const list = action.payload;
      state.items.push(list);
    },
  },
});

export const { handleCart } = cart.actions;

export default cart.reducer;
