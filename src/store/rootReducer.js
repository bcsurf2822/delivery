import { combineReducers } from "@reduxjs/toolkit";
import deliveryReducer from "./deliverySlice";

const rootReducer = combineReducers({
  delivery: deliveryReducer,
});

export default rootReducer;