import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  country: "",
  dailyWeather: true,
  forecastWeather: false,
};
export const inputUser = createSlice({
  name: "cityByUser",
  initialState: { value: initialState },
  reducers: {
    dataFetchReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { dataFetchReducer } = inputUser.actions;
export default inputUser.reducer;
