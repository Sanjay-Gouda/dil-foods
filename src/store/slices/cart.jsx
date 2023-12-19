import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cart = createSlice({
  name: "productCart",
  initialState: initialState,
  reducers: {
    handleCart: () => {
      console.log("Adding Cart");
    },
  },
});

export const { handleCart } = cart.actions;

export default cart.reducer;
