import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    coords: [55.621727, 37.423560]
  },
  reducers: {
    setCoords: (state, action) => {
      state.coords = action.payload;
    }
  }
});

export const {setCoords} = mapSlice.actions;

export default mapSlice.reducer;