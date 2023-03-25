import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
  drivers: []
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    addDriver: (state, action) => {
      state.drivers.push(action.payload);
    },
  },
});

export const {addCustomer, addDriver} = deliverySlice.actions;

export default deliverySlice.reducer;