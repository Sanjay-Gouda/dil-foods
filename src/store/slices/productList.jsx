import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: [],
};

const products = createSlice({
  name: "productList",
  initialState: initialState,
  reducers: {
    setProductsList: (state, action) => {
      const payload = action.payload;

      return {
        ...state.productDetails,
        productDetails: payload,
      };
    },
  },
});

export const { setProductsList } = products.actions;

export default products.reducer;
