import countryReducer from "../features/inputCity";
import dataWeather from "../features/dataWeather";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    dataUser: countryReducer,
    dataWeather: dataWeather,
  },
});
