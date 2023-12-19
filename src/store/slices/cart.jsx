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
    removeCart: (state, action) => {
      const id = action.payload;

      const cartItem = state.items?.filter((item) => item.id !== id);

      state.items = cartItem;
    },
  },
});

export const { handleCart, removeCart } = cart.actions;

export default cart.reducer;
