import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingBike = state.find((bike) => bike.id === id);

      if (existingBike) {
        existingBike.quantity += 1;
      } else {
        state.push({ id, name, image, price, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      return state.filter((bike) => bike.id !== action.payload);
    }
  }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
