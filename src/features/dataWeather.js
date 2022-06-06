import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const dataWeatherSlice = createSlice({
  name: "dataWeather",
  initialState: { data: initialState },
  reducers: {
    dataWeather: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { dataWeather } = dataWeatherSlice.actions;
export default dataWeatherSlice.reducer;